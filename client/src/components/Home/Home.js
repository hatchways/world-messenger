import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import axios from 'axios';
import socket from '../../socket';

import Sidebar from './Sidebar/Sidebar';
import Chat from './Chat/Chat';

import styles from '../../styles/Home/HomeStyles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: sessionStorage.getItem("token"),
      username: sessionStorage.getItem("username"),
      profile: {
        firstName: '',
        lastName: '',
        image: {},
        language: ''
      },
      contacts: [],
      selected: null,
      conversations: [],
      conversationId: '',
      messages: [],
      client: socket()
    };
  }

  componentDidMount() {
    this.getProfile();
    this.getContacts();
    this.getConversations();
    this.state.client.registerListener(this.receiveMessages);
  }

  getProfile = () => {
    return axios
      .get('api/profiles/profile', {
        headers: {
          Authorization: this.state.token
        }
      })
      .then(res => {
        this.setState({
          profile: {
            ...this.state.profile,
            ...res.data.user.profile.profile
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getContacts = () => {
    return axios
      .get('api/contacts/list', {
        headers: {
          Authorization: this.state.token
        }
      })
      .then(res => {
        let contacts = res.data.map((curr, index) => {
          let image = null;
          if (curr.recipient.hasOwnProperty('profile')) {
            image = curr.recipient.profile.image;
          }
          return {
            index: index,
            username: curr.recipient.username,
            image: image,
            status: curr.status
          }
        });
        
        this.setState({
          contacts: contacts
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  logout = () => {
    sessionStorage.clear();
    this.setState({
      token: null,
      contacts: []
    });
  }

  requestContact = email => {
    return axios
      .post('api/contacts/request', {email}, {
        headers: {
          Authorization: this.state.token
        }
      })
      .then(() => {
        this.getContacts();
      })
      .catch(err => {
        console.log(err);
        alert(err.response.data.msg);
      });
  }

  updateContact = (username, type) => {
    return axios
      .post(`api/contacts/${type}`, {username}, {
        headers: {
          Authorization: this.state.token
        }
      })      
      .then(() => {
        this.getContacts();
      })
      .catch(err => {
        console.log(err);
      });
  }

  selectContact = index => {
    let username = this.state.contacts[index].username;

    let conversation = this.state.conversations.find(curr => {
      return curr.participants.some(val => val.username === username);
    });
    
    return new Promise(resolve => {
      if (conversation) {
        resolve(conversation._id);
      }
      else {
        axios
          .post('api/conversations/new', {recipient: username}, {
            headers: {
              Authorization: this.state.token
            }
          })
          .then(res => {
            resolve(res.data.conversationId);
          });
      }
    })
    .then(conversationId => {
      this.setState({
        conversationId
      });
      return axios({
        method: 'get',
        url: `api/conversations/conversation/${conversationId}`,
        headers: {
          Authorization: this.state.token
        }
      })
      .then(res => {
        this.receiveMessages(res.data);
      })
    })
    .then(() => {
      this.setState({
        selected: index
      });
    });
  }

  editProfile = (firstName, lastName, profileImage) => {
    return axios
      .post('api/profiles/profile', {firstName, lastName}, {
        headers: {
          Authorization: this.state.token
        }
      })
      .then(() => {
        if (profileImage) {
          let formData = new FormData();
          formData.append('file', profileImage);
          return axios.post('api/profiles/image', formData, {
            headers: {
              Authorization: this.state.token,
              'Content-Type': 'multipart/form-data'
            }
          });
        }
      })
      .then(() => {
        this.getProfile();
      })
      .catch(err => {
        console.log(err);
      });
  }

  getConversations = () => {
    return axios
      .get('api/conversations', {
        headers: {
          Authorization: this.state.token
        }
      })
      .then(res => {
        this.setState({
          conversations: res.data.conversations
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  sendMessage = msg => {
    this.state.client.sendMessage(
      this.state.conversationId,
      msg,
      this.state.username
    );
  }

  receiveMessages = data => {
    let messages = data.conversation.map(curr => ({
      id: curr._id,
      body: curr.body,
      author: curr.author.username
    }));

    this.setState({
      messages: messages
    });
  }

  render() {
    if (!this.state.token) return <Redirect to="/login" />;

    return (
      <Grid 
        container 
        spacing={0} 
        className={this.props.classes.root}
      >
        <CssBaseline />
        <Sidebar 
          username={this.state.username}
          profile={this.state.profile}
          contacts={this.state.contacts}
          selected={
            this.state.selected !== null
              ? this.state.contacts[this.state.selected].username
              : ''
          }
          logout={this.logout}
          editProfile={this.editProfile}
          requestContact={this.requestContact}
          updateContact={this.updateContact}
          selectContact={this.selectContact}
        />
        {this.state.selected !== null && 
          <Chat 
            username={this.state.username}
            selected={this.state.contacts[this.state.selected]}
            messages={this.state.messages}
            sendMessage={this.sendMessage}
          />
        }
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);