import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadFiles } from '../actions/files';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';

class FileComponent extends Component {
  state = {
    item: null,
  }

  componentDidMount() {
    this.props.loadFiles();
  }

  loadFilesById = (file) => () => {
    if(file.mimeType === 'folder') {
      this.props.loadFiles(file.id);
    }
  }
  render() {
    return (
      <div>
        <GridList cellHeight={180} cols={10}>
          {this.props.list && this.props.list.map(tile => (
            <GridListTile key={tile.img} onClick={this.loadFilesById(tile)}>
              <img src={tile.mimeType === 'file' ? tile.thumbnailLink : 'http://www.pngmart.com/files/1/Folders-PNG-File.png' } alt={tile.title} />
              <GridListTileBar
                title={tile.name}
                subtitle={<span>{tile.mimeType}</span>}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

function mapStateToProps({files}) {
  return {
    list: files.list,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loadFiles: (id) => {
      dispatch(loadFiles(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileComponent);

