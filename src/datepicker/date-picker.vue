<template>
    <div class="w-date-picker" ref="wrapper">
        <w-popover ref="popover" position="bottom" trigger="click" :container="popoverContainer">
            <w-input @input="onInput" type="text" :value="formattedValue"></w-input>
            <template slot="content">
                <div class="w-date-picker-pop">
                    <div class="w-date-picker-nav">
                        <span :class="c('prevYear','navItem')" @click="onClickPrevYear"><w-icon name="leftleft"></w-icon></span>
                        <span :class="c('prevMonth','navItem')" @click="onClickPrevMonth"><w-icon name="prePage"></w-icon></span>
                        <span :class="c('yearAndMonth')" @click="onClickMonth">
                            <span>{{display.year}}年 </span>
                            <span>{{display.month+1}}月</span>
                        </span>
                        <span :class="c('nextYear','navItem')" @click="onClickNextMonth"><w-icon name="nextPage"></w-icon></span>
                        <span :class="c('nextMonth','navItem')" @click="onClickNextYear"><w-icon name="rightright"></w-icon></span>
                    </div>
                    <div class="w-date-picker-panels">
                        <div v-show="mode == 'month'">
                            <div :class="c('selectMonth')">
                                <div :class="c('selects')">
                                    <!-- 选择年 月 select options -->
                                    <select :value="display.year" @change="onSelectYear">
                                        <option
                                         v-for="(year,index) in years"
                                         :value="year"
                                         :key="index" 
                                         >
                                         {{year}}
                                         </option>
                                    </select>年
                                    <select :value="display.month" @change="onSelectMonth">
                                        <option
                                         v-for="(month,index) in helper.range(0,11)"
                                         :value="month"
                                         :key="index" 
                                         >
                                         {{month+1}}
                                         </option>
                                    </select>月
                                </div>
                                <div :class="c('returnDayMode')">
                                    <w-button @click="returnDayMode">返回</w-button>
                                </div>
                            </div>
                        </div>
                        <!-- v-if的bug  如果是v-if会导致突然生成的元素不在contentWrapper这个DOM里面 -->
                        <div v-show="mode == 'day'" class="w-date-picker-content">
                            <div :class="c('weekdays')">
                                <span :class="c('weekday')" v-for="(i,index) in [0,1,2,3,4,5,6]" :key="index">
                                    {{weekdays[i]}}
                                </span>
                            </div>
                            <!-- range是=begin <end 6*7-->
                            <div :class="c('row')" v-for="(i,index1) in helper.range(1,6)" :key="index1">
                                <span
                                 @click="onClickCell(getVisibleDay(i,j))"
                                 :class="[c('cell'),
                                 {
                                    currentMonth:isCurrentMonth(getVisibleDay(i,j)),
                                    selected:isSelected(getVisibleDay(i,j)),
                                    today: isToday(getVisibleDay(i,j))
                                 }]" 
                                 v-for="(j,index2) in helper.range(1,7)" 
                                 :key="index2">
                                    {{getVisibleDay(i,j).getDate()}}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="w-date-picker-actions">
                        <w-button @click="onClickToday">今天</w-button>
                        <w-button @click="onClickClear">清除</w-button>
                    </div>
                </div>
            </template>
            
        </w-popover>
    </div>
</template>

<script>
    import helper from './helper'
    import WInput from '../input'
    import WButton from '../button/button'
    import WIcon from '../icon'
    import WPopover from '../popover'
    import ClickOutside from '../click-outside'
    export default {
        name:'WDatePicker',
        directives:{ClickOutside},
        components:{
            WInput,WIcon,WPopover,WButton
        },
        props:{
            firstDayOfMonth:{
                type:Number,
                //周一还是周日开始
                default:0
            },
            value:{
                type:Date
            },
            scope:{
                type:Array,
                //从range的原因--------------0开始的，最后一个不算?
                default: () => [new Date(1900,0,1), helper.addYear(new Date(), 100)]
            }
        },
        //加上firstDayOfWeek? 0 or 1 看第一个是周日还是周一!!!!
        data(){
            let [year, month] = helper.getYearMonthDate(this.value)
            return {
                mode:'day',
                helper:helper,
                weekdaysStartFromSunday:["日","一","二","三","四","五","六"],
                weekdaysStartFromMonday:["一","二","三","四","五","六","日"],
                popoverContainer:null,
                display:{year,month}
            }
        },
        watch:{
            value(newVal,oldVal){
                if(newVal){
                    let [year, month] = helper.getYearMonthDate(this.value)
                    this.display = {year, month}
                    console.log('value发生变化,改变display')
                }
            }
        },
        computed:{
            weekdays(){
                if(this.firstDayOfMonth == 0){
                    return this.weekdaysStartFromSunday
                }else{
                    return this.weekdaysStartFromMonday
                }
            },
            visibleDays(){
                let date = new Date(this.display.year, this.display.month, 1);
                let array = []
                let first = helper.firstDayOfMonth(date)
                let last = helper.lastDayOfMonth(date)
                let [year, month, day] = helper.getYearMonthDate(date)

                let n = first.getDay()
                //得到当前是周几？
                //一共42天
                //中间夹了前面+first天....
                //比如first是周 6
                //first - 6day (36*24*1000) （周日）
                //first - 5day 
                //first - 4day 
                //first - 3day 
                //first - 2day 
                //first - 1day 
                //first 
                //first + 1day
                //....一共42天
                let oneDay = 3600*24*1000
                let startDate
                if(this.firstDayOfMonth === 0){
                    //第一个是周日 否则就是周一开始
                    startDate = first - (n === 0 ? 6 : n) * oneDay
                }else{
                    startDate = first - (n === 0 ? 6 : n-1) * oneDay
                }
                // console.log(first)
                // console.log(new Date(first - 6 * oneDay))
                for(let i=0;i<42;i++){
                    array.push(new Date(startDate + i*oneDay))
                }
                return array
            },
            visibleDays2(){
                //计算天数一共 6行*7列 = 42
                //[]+[1-31/30/28]+[]
                //根据第1天是周几确认第一个数组的元素
                //1->周1->周日
                //1->周2->周日,周1
                //1->周3->周日,周1,周2
                //1->周4->0,1,2,3
                //1->周6->0,1,2,3,4,5
                //1->周日(0)->周日,1,2,3,4,5,周6
                //第一个数组为 n(第一天周几?)-1
                //第三个数组就是42-第一个数组+第二个数组
                let date = this.value
                let first = helper.firstDayOfMonth(date)
                let last = helper.lastDayOfMonth(date)
                let array = []
                let [year, month, day] = helper.getYearMonthDate(date)
                for(let i = first.getDate(); i<=last.getDate(); i++){
                    //天数
                    array.push(new Date(year, month, i))
                }
                //第一天星期几，之前的都是n-1，第一天星期0？表示为0-6
                let n = first.getDay() === 0 ? 6 : first.getDay() - 1
                let array2 = []
                for(let i = 0;i <= n; i++){
                    array2.push(new Date(year, month, -i))
                }
                array2 = array2.reverse()

                //第三个数组 前两减去
                let array3 = []
                let m = 42 - array.length - array2.length
                for(let i = 1;i <= m; i++){
                    array3.push(new Date(year, month + 1, i))
                }
                return [...array2,...array,...array3]
            },
            formattedValue(){
                if(!this.value) return ""
                const [year, month, day] = helper.getYearMonthDate(this.value)
                return `${year}-${helper.pad2(month + 1)}-${helper.pad2(day)}`;
            },
            years(){
                return helper.range(
                    this.scope[0].getFullYear(),
                    this.scope[1].getFullYear(), //?
                )
            }
        },
        mounted() {
            this.popoverContainer = this.$refs.wrapper
            
        },
        methods:{
            onSelectYear(e){
                //字符串->数组 不能选了超过边界
                const year = e.target.value - 0
                const d = new Date(year,this.display.month)
                if(d >= this.scope[0] && d <= this.scope[1]){
                    this.display.year = year
                }else{
                    alert("year setting is not qualified")
                    e.target.value = this.display.year
                }
            },
            onSelectMonth(e){
                const month = e.target.value - 0
                const d = new Date(this.display.year,month)
                if(d >= this.scope[0] && d <= this.scope[1]){
                    this.display.month = month
                }else{
                    alert("month setting is not qualified")
                    e.target.value = this.display.month
                }
            },
            onInput(value){
                console.log('input value',value)
                var reg = /^\d{4}-\d{2}-\d{2}$/g
                if(value.match(reg)){
                    let [year, month, day] = value.split('-')
                    month = month - 1
                    year = year - 0 //变成数字
                    this.display = { year, month }
                    this.$emit('input', new Date(year,month,day))
                }
            },
            c(...classNames){
                //传入多个参数自动加前缀
                return classNames.map(className=>`w-date-picker-${className}`)
            },
            getVisibleDay(row,col){
                return this.visibleDays[(row-1)*7+col-1]
            },
            onClickCell(date){
            //    if (this.isCurrentMonth(date)) {
                    this.$emit("input", date);
                    this.$refs.popover.close();
                // }
            },
            onFocusInput(){
                this.popVisible = true
            },
            onBlurInput(){
                this.popVisible = false
            },
            isCurrentMonth(date) {
                //等于显示的
                let [year1, month1] = helper.getYearMonthDate(date)
                return year1 === this.display.year && month1 === this.display.month
            },
            onClickPrevYear(){
                const oldDate = new Date(this.display.year,this.display.month)
                const newDate = helper.addYear(oldDate,-1)
                const [year, month] = helper.getYearMonthDate(newDate)
                this.display = { year, month }
            },
            onClickPrevMonth(){
                const oldDate = new Date(this.display.year,this.display.month)
                const newDate = helper.addMonth(oldDate,-1)
                const [year, month] = helper.getYearMonthDate(newDate)
                this.display = { year, month }
            },
            onClickNextYear(){
                const oldDate = new Date(this.display.year,this.display.month)
                const newDate = helper.addYear(oldDate,1)
                const [year, month] = helper.getYearMonthDate(newDate)
                this.display = { year, month }
            },
            onClickNextMonth(){
                const oldDate = new Date(this.display.year,this.display.month)
                const newDate = helper.addMonth(oldDate,1)
                const [year, month] = helper.getYearMonthDate(newDate)
                this.display = { year, month }
            },
            //切换日期年月选择器 和 天选择
            onClickMonth(){
                if(this.mode !== "month"){
                    this.mode = "month"
                }else{
                    this.mode = "day"
                }
            },
            returnDayMode(){
                console.log('rem-dimensions')
                this.mode = "day"  
            },
            isSelected(date){
                if(!this.value) return false
                let [y,m,d] = helper.getYearMonthDate(date)
                let [y2,m2,d2] = helper.getYearMonthDate(this.value)
                return y === y2 && m===m2&&d===d2
            },
            isToday(date){
                let [y,m,d] = helper.getYearMonthDate(date)
                let [y2,m2,d2] = helper.getYearMonthDate(new Date())
                return y === y2 && m===m2&&d===d2
            },
            onClickToday(){
                const now = new Date()
                //改变display 改变input的值
                const [year, month, day] = helper.getYearMonthDate(now)
                this.display = {year,month}
                this.$emit('input',new Date(year, month, day))
            },
            onClickClear(){
                this.$emit("input", undefined);
                this.$refs.popover.close();
            }
            

        }
    }
</script>

<style lang="scss" scoped>
@import './styles/_var';
.w-date-picker{
    // border: 1px solid red;
    width: 224px;
    &-nav{
        background:#eee;
        display: flex;
    }
    &-navItem,
    &-weekday,
    &-cell{
        width:32px;
        height: 32px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    &-cell{
        color: grey;
        &.currentMonth{
            color: black;
            &:hover{
                background: $blue;
                cursor: pointer;
                color: #fff;
            }
        }
       
        &.today {
            background: $grey;
        }
        &.selected {
            border: 1px solid $blue;
        }
    }
    &-yearAndMonth{
        margin: auto;
        cursor: pointer;
    }
     &-selectMonth {
        width: 224px;
        height: 224px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    &-returnDayMode {
        margin-top: 8px;
    }
    &-actions{
        display: flex;
        justify-content: flex-end;
        margin-right: .5em;
    }
}
/deep/ .w-popover-content-wrapper{
    padding: 0;
}
/deep/ .w-popover-content-wrapper.position-bottom::before{
    opacity: 0;
}
/deep/ .w-popover-content-wrapper.position-bottom::after{
    opacity: 0;
}
</style>