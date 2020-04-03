import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Switch from "@material-ui/core/Switch"

const CustomSwitch = withStyles(theme => ({
  root: {
    width: 50, //트랙 가로길이
    height: 28,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 3,
    "&$checked": {
      transform: "translateX(22px)", // 스위치 와리가리 간격
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "rgb(137,85,246)", // 활성화된 트랙 배경색
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    // 동그라미 크기
    width: 22,
    height: 22,
  },
  track: {
    borderRadius: 26 / 2,
    backgroundColor: "rgb(223,226,230)", // 트랙 배경색
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  )
})

export default CustomSwitch
