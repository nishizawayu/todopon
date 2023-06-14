import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import dayjs from 'dayjs';
import 'dayjs/locale/ja'; 
dayjs.locale("ja");

const INITIAL_DATE = dayjs().format("YYYY-MM-DD");

function Calendars() {
const [selected, setSelected] = useState(INITIAL_DATE);
const handleDayPress = (day) => {
    setSelected(day.dateString);
    const date = day.dateString;
    const daydate = dayjs(date).format('MM月DD日 dddd');
    console.log(daydate);
}

  return (
    <View style={{paddingTop:40}}>
     <Calendar
        monthFormat={"yyyy年 MM月"}
        current={INITIAL_DATE}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'pink',
            selectedTextColor: 'white'
          }
        }}
        onDayPress={handleDayPress}
      />
    </View>
  );
}

LocaleConfig.locales.jp = {
 today: "今日",
monthNames: [ "1 月", "2 月", "3 月", "4 月", "5 月", "6 月", "7 月", "8 月", "9 月", "10 月", "11 月", "12 月", ],
monthNamesShort: [ "1 月", "2 月", "3 月", "4 月", "5 月", "6 月", "7 月", "8 月", "9 月", "10 月", "11 月", "12 月", ],
dayNames: [ "日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日", ],
dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
};
LocaleConfig.defaultLocale = "jp";

export default Calendars;