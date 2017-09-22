import React from 'react'
import { ScrollView, Text, Button, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'

async function getContactsAsync(offset = 0) {
  const { Contacts, Permissions } = Expo
  const { status } = await Permissions.askAsync(Permissions.CONTACTS)
  const pageSize = 500

  if (status === 'granted') {
    return Contacts.getContactsAsync({ pageSize, pageOffset: pageSize * offset }).data.sort((a, b) => {
      let nameA = a.name.toUpperCase()
      let nameB = b.name.toUpperCase()

      if (nameA < nameB) {
        return -1
      }

      if (nameA > nameB) {
        return 1
      }

      return 0
    })
  } else {
    throw new Error('Location permission not granted')
  }
}

const contactList = getContactsAsync()

console.log(contactList)

export default class App extends React.Component {
  state = {
    contactList,
    pageNumber: 0
  }

  nextPage = () => {
    this.setState((prevState, prevProps) => {
      let { pageNumber } = prevState

      return {
        pageNumber: pageNumber + 1,
        contactList: getContactsAsync(pageNumber + 1)
      }
    })
  }

  previousPage = () => {
    this.setState((prevState, prevProps) => {
      let { pageNumber } = prevState

      return {
        pageNumber: pageNumber - 1,
        contactList: getContactsAsync(pageNumber - 1)
      }
    })
  }

  render() {
    const { contactList } = this.state

    return (
      <ScrollView>
        <Text style={styles.header}>Contacts</Text>
        { contactList.map(contact => (
            <Link to=`/contact/${contact.id}`>
              <Text>{contact.name}</Text>
            </Link>
          )
        )}

        { contactList.hasNextPage &&
          <Button onPress={this.nextPage} color="blue" title="Next page" />
        }

        { contactList.hasPreviousPage &&
          <Button onPress={this.previousPage} color="blue" title="Previous page" />
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
})
