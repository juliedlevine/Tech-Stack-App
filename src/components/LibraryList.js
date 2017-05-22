import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    // This is like the map function and library is the individual item from the libraries array
    renderRow(library) {
        return <ListItem library={library}/>
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        libraries: state.libraries
    }
}

// connect returns another function. We then call that return function with the LibraryList component as the argument.
export default connect(mapStateToProps)(LibraryList);
