import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View
} from 'react-native'

import taskListStore from './../mobx/TaskListStore'
import { observer } from 'mobx-react/native'

@observer
export default class TaskListScreen extends Component {

  renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <View>
          <TouchableOpacity style={{ marginTop: -2 }} onPress={() => taskListStore.finishItem(index)}>
            <Text> {(item.isFinished) ? `✅` : `🕘`} </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ color: 'black' }}>{item.title}</Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <TouchableOpacity style={{ marginTop: -2 }} onPress={() => taskListStore.deleteItem(index)}>
            <Text>{`❌`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    const list = taskListStore.list.slice() // don't forget copy the list from store

    return (
      <FlatList
        style={styles.container}
        data={list}
        extraData={list}
        keyExtractor={(item, index) => `${index}`}
        renderItem={this.renderItem}
      />
    )
  }
}
