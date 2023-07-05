import React, { useState } from "react";
import { StyleSheet, View,Text } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import dayjs from 'dayjs';
import 'dayjs/locale/ja'; 
import { Switch } from "react-native-elements";
import { flushSync } from "react-dom";
import { Button } from "react-native-paper";
dayjs.locale("ja");

const INITIAL_DATE = dayjs().format("YYYY-MM-DD");

const dayarr = [];

function Calendars(props) {
const [selected, setSelected] = useState(INITIAL_DATE);

const handleDayPress = (day) => {
    setSelected(day.dateString);
    const date = day.dateString;
    const daydate = dayjs(date).format('MM月DD日 dddd');
    dayarr.push(daydate);  
    console.log(dayarr);
    {props.data(dayarr)};
}

const [value, setValue] = React.useState(false);

  return (
    <View style={{backgroundColor:"#FFBF85",flex: 1,}}>
      <View style={{
          flexDirection:"row",
          justifyContent:"flex-end",
          backgroundColor:"#fff",
          paddingTop:5,
          paddingBottom:20,
      }}>
      </View>
      <Calendar
        monthFormat={"yyyy年 MM月"}
        current={INITIAL_DATE}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: '#FFAF37',
            selectedTextColor: 'white'
          }
        }}
        onDayPress={handleDayPress}
        style={{
          backgroundColor:"#fff",
          width:"90%",
          marginTop:"10%",
          marginLeft:"5%",
          padding:30,
          backgroundColor:"#fff",
          borderColor: "#fff",
          borderWidth: 1,
          borderRadius:12,
          overflow: "hidden",
        }}
      />
      <View style={{
          marginTop:30,
          marginLeft:"5%",
          backgroundColor:"#fff",
          width:"90%",
          padding:15,
          backgroundColor:"#fff",
          borderColor: "#fff",
          borderWidth: 1,
          borderRadius:12,
          overflow: "hidden",
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center",
        }}>
        <Text style={{fontSize:18,
          fontWeight:700,}}>通知する</Text>
        <Switch
          color="#FFAF37"
          value={value}
          onValueChange={() => setValue(!value)}
        />
      </View>
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