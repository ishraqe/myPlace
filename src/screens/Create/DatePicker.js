import React from "react";
import { View, Text } from "react-native";
import DatePicker from "react-native-datepicker";
import { primaryFontColor, primaryFontSize } from "../../GlobalStyle";

const DatePickerComponent = props => {
  if (props.isReminderTrue) {
    return (
      <DatePicker
        style={props.DatePickerStyle}
        customStyles={{
          dateInput: {
            borderWidth: 0,
            alignItems: "flex-start",
            fontColor: primaryFontColor,
            fontSize: primaryFontSize + 10
          }
        }}
        date={props.datetime}
        mode="datetime"
        format="YYYY-MM-DD HH:mm"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        minuteInterval={10}
        showIcon={false}
        onDateChange={datetime => {
          this.setState({ datetime: datetime });
        }}
      />
    );
  } else {
    return <Text style={props.text}>Set Reminder</Text>;
  }
};

export default DatePickerComponent;
