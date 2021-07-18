TweenLite.defaultEase = Expo.easeInOut;
var timerEl = document.querySelector('.timer');
function initTimer () {
   
   var self = this,
       timerEl = document.querySelector('.timer'),
       hoursGroupEl = timerEl.querySelector('.hours-group'),
       minutesGroupEl = timerEl.querySelector('.minutes-group'),
       secondsGroupEl = timerEl.querySelector('.seconds-group'),

       hoursGroup = {
          firstNum: hoursGroupEl.querySelector('.first'),
          secondNum: hoursGroupEl.querySelector('.second')
       },
       minutesGroup = {
          firstNum: minutesGroupEl.querySelector('.first'),
          secondNum: minutesGroupEl.querySelector('.second')
       },

       secondsGroup = {
          firstNum: secondsGroupEl.querySelector('.first'),
          secondNum: secondsGroupEl.querySelector('.second')
       };

   var time = {
      hour:"",
      min: "",
      sec: ""
   };

   var timeNumbers;

   function updateTimer() {

      var timestr;
      var newDate = new Date();
      var temp = newDate.toTimeString().split(" ");
     // console.log(temp)
      var tempsplit = temp[0].split(':');
      
      time.hour = tempsplit[0];
      time.min = tempsplit[1];
      time.sec = tempsplit[2];

      timestr = time.hour + time.min + time.sec;
      timeNumbers = timestr.split('');
      updateTimerDisplay(timeNumbers);
     
      setTimeout(updateTimer, 1000);

   }

   function updateTimerDisplay(arr) {
      animateNum(hoursGroup.firstNum, arr[0]);
      animateNum(hoursGroup.secondNum, arr[1]);
      animateNum(minutesGroup.firstNum, arr[2]);
      animateNum(minutesGroup.secondNum, arr[3]);
      animateNum(secondsGroup.firstNum, arr[4]);
      animateNum(secondsGroup.secondNum, arr[5]);

   }

   function animateNum (group, arrayValue) {

      TweenMax.killTweensOf(group.querySelector('.number-grp-wrp'));
      TweenMax.to(group.querySelector('.number-grp-wrp'), 1, {
         y: -group.querySelector('.num-' + arrayValue).offsetTop
      });

   }
   
   setTimeout(updateTimer, 1000);

}


initTimer();