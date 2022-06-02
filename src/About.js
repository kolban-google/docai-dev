import React from 'react';
import Dialog from '@mui/material/Dialog';
import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import PropTypes from 'prop-types';
/**
 * props
 * * open
 * * entity
 * * close
*/

function AboutDialog(props) {

  return (
    <Dialog open={props.open} fullWidth>
      <DialogTitle>About - Document AI Dev</DialogTitle>
      <DialogContent dividers>
        <p>Present attributes of the result of Document AI processing on a document.
            The JSON data is presented in a more consumable format.
        </p>
        <p>
            The source for this sample can be found at <a href="https://github.com/kolban-google/docai-dev" target="_blank" rel="noreferrer">github: kolban-google/docai-dev</a>
        </p>
        <p>This project is merely a sample and is provided <i>as-is</i> with no formal support.
            This is not a Google product or Google offering.
        </p>
        <p>Neil Kolban (kolban@google.com)</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.close}>Close</Button>
      </DialogActions>
    </Dialog>
  )
} // AboutDialog

AboutDialog.propTypes = {
  'open': PropTypes.bool.isRequired,
  'close': PropTypes.func.isRequired
}

export default AboutDialog