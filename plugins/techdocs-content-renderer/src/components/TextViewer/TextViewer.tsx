import React, {
  ChangeEvent,
  MouseEvent,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from 'react';

import {
  withStyles,
  makeStyles,
  useTheme,
  Box,
  MenuItem,
  ListItemText,
  Slider,
  IconButton,
  Typography,
  Theme,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { useShadowRootElements } from '@backstage/plugin-techdocs-react';
import { ExampleComponent } from '../ExampleComponent';

export const TextViewerAddon = () => {
  //   const classes = useStyles();
  //   const theme = useTheme();
  //   const [body] = useShadowRootElements(['h1']);

  return <ExampleComponent />;
};
