import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'

export default class Contact extends React.component {
  state = {
    contact: null
  }

  componentDidMount() {
    const { Contacts } = Expo
    const { id } = this.props.match.params

    this.setState({
      contact: Contacts.getContactByIdAsync({
        id,
        fields: [
          Contacts.PHONE_NUMBERS,
          Contacts.EMAILS,
          Contacts.ADDRESSES,
          Contacts.URLS,
        ],
      })
    })
  }

  render() {
    const { contact } = this.state

    return (
      <ScrollView>
        <Link to="/">
          <Text>Back to contact list</Text>
        </Link>
        { contact &&
          { Object.keys(contact).map(c =>
              <Text>{`${c.charAt(0).toUpperCase() + c.slice(1)}: ${contact[c]}`}</Text>
            )
          }
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

})
