import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Outline from '@material-ui/core/Outline';
import Slider from '@material-ui/lab/Slider';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = {
  container: {},
  outline: {
    marginBottom: 16,
  },
  sliderContainer: {
    width: 250,
  },
};

class SimpleOutline extends React.Component {
  state = {
    br: 4,
    sw: 1,
    gap: 100,
    open: true,
  };

  handleChange = name => (event, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleChangeSwitch = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    const { br, sw, gap, open } = this.state;

    return (
      <Grid container direction="column" className={classes.container}>
        <Outline
          open={open}
          borderRadius={br}
          strokeWidth={sw}
          gapWidth={gap}
          className={classes.outline}
        />
        <div className={classes.sliderContainer}>
          <Typography id="brLabel">Border radius</Typography>
          <Slider
            value={br}
            min={0}
            max={10}
            step={1}
            aria-labelledby="brLabel"
            onChange={this.handleChange('br')}
          />
          <Typography id="swLabel">Stroke width</Typography>
          <Slider
            value={sw}
            min={1}
            max={4}
            step={1}
            aria-labelledby="swLabel"
            onChange={this.handleChange('sw')}
          />
          <Typography id="gapLabel">Gap width</Typography>
          <Slider
            value={gap}
            min={0}
            max={200}
            aria-labelledby="gapLabel"
            onChange={this.handleChange('gap')}
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.open}
                onChange={this.handleChangeSwitch('open')}
                value="open"
              />
            }
            label="Gap open"
          />
        </div>
      </Grid>
    );
  }
}

SimpleOutline.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleOutline);
