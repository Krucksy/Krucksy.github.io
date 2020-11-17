<template>
    <div>
        <clock
                :hours="String(this.hours).padStart(2, '0')"
                :minutes="String(this.minutes).padStart(2, '0')"
                :seconds="String(this.seconds).padStart(2, '0')"

                :day="String(this.day).padStart(2, '0')"
                :month="this.month"
                :year="this.year"
        ></clock>

        <!-- Sidebar-->
        <div id="listSidebar" class="sidebar">
            <div class="mb-2 title-container">
                <div class="row">
                    <div class="col">
                        <h3>Sonneries:</h3>
                    </div>
                    <div class="col-auto all-switches-container">
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="allSwitches" @click="toggleAllSwitches()" checked>
                            <label class="custom-control-label" for="allSwitches"></label>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="list-group">
                <li v-for="alarm, index in alarms" class="list-group-item">
                    <div class="row">
                        <div class="col">
                            <span>{{ String(alarm.hour).padStart(2, '0') }}:{{ String(alarm.minute).padStart(2, '0') }}</span>
                            <span class="countdown pl-3" v-if="alarm.enable">Sonne dans {{ countdown(alarm) }}</span>
                        </div>
                        <div class="col-auto flex-end">
                            <div class="custom-control custom-switch">
                                <input type="checkbox" class="custom-control-input" :id="'customSwitch' + index" v-model="alarm.enable">
                                <label class="custom-control-label" :for="'customSwitch' + index"></label>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <!--  -->
<!--        <p>Prochaine sonnerie dans {{ countdown(alarms[nextAlarmIndex]) }} à {{ String(alarms[nextAlarmIndex].hour).padStart(2, '0') + ":" + String(alarms[nextAlarmIndex].minute).padStart(2, '0') }}</p>-->
    </div>
</template>

<script>
    // import clock from 'clock.vue'
    module.exports = {
        data () {
            return {
                hours : 0,
                minutes : 0,
                seconds : 0,

                day: 0,
                month: 0,
                year: 0,

                // EMT
                // alarms: [
                //     {
                //         hour: 7,
                //         minute: 35,
                //         enable: true,
                //     },
                //     {
                //         hour: 8,
                //         minute: 20,
                //         enable: true,
                //     },
                //     {
                //         hour: 8,
                //         minute: 25,
                //         enable: true,
                //     },
                //     {
                //         hour: 9,
                //         minute: 10,
                //         enable: true,
                //     },
                //     {
                //         hour: 9,
                //         minute: 15,
                //         enable: true,
                //     },
                //     {
                //         hour: 10,
                //         minute: 0,
                //         enable: true,
                //     },
                //     {
                //         hour: 10,
                //         minute: 15,
                //         enable: true,
                //     },
                //     {
                //         hour: 11,
                //         minute: 0,
                //         enable: true,
                //     },
                //     {
                //         hour: 11,
                //         minute: 5,
                //         enable: true,
                //     },
                //     {
                //         hour: 11,
                //         minute: 50,
                //         enable: true,
                //     },
                //     {
                //         hour: 11,
                //         minute: 55,
                //         enable: true,
                //     },
                //     {
                //         hour: 12,
                //         minute: 40,
                //         enable: true,
                //     },
                //     {
                //         hour: 13,
                //         minute: 25,
                //         enable: true,
                //     },
                //     {
                //         hour: 13,
                //         minute: 30,
                //         enable: true,
                //     },
                //     {
                //         hour: 14,
                //         minute: 15,
                //         enable: true,
                //     },
                //     {
                //         hour: 14,
                //         minute: 20,
                //         enable: true,
                //     },
                //     {
                //         hour: 15,
                //         minute: 5,
                //         enable: true,
                //     },
                //     {
                //         hour: 15,
                //         minute: 15,
                //         enable: true,
                //     },
                //     {
                //         hour: 16,
                //         minute: 0,
                //         enable: true,
                //     },
                //     {
                //         hour: 16,
                //         minute: 5,
                //         enable: true,
                //     },
                //     {
                //         hour: 16,
                //         minute: 50,
                //         enable: true,
                //     },
                // ],

                // Lycée
                alarms: [
                    {
                        hour: 8,
                        minute: 15,
                        enable: true,
                    },
                    {
                        hour: 9,
                        minute: 0,
                        enable: true,
                    },
                    {
                        hour: 9,
                        minute: 05,
                        enable: true,
                    },
                    {
                        hour: 9,
                        minute: 50,
                        enable: true,
                    },
                    {
                        hour: 10,
                        minute: 10,
                        enable: true,
                    },
                    {
                        hour: 10,
                        minute: 55,
                        enable: true,
                    },
                    {
                        hour: 11,
                        minute: 0,
                        enable: true,
                    },
                    {
                        hour: 11,
                        minute: 45,
                        enable: true,
                    },
                    {
                        hour: 12,
                        minute: 35,
                        enable: true,
                    },
                    {
                        hour: 12,
                        minute: 40,
                        enable: true,
                    },
                    {
                        hour: 13,
                        minute: 25,
                        enable: true,
                    },
                    {
                        hour: 13,
                        minute: 30,
                        enable: true,
                    },
                    {
                        hour: 14,
                        minute: 15,
                        enable: true,
                    },
                    {
                        hour: 14,
                        minute: 20,
                        enable: true,
                    },
                    {
                        hour: 15,
                        minute: 5,
                        enable: true,
                    },
                    {
                        hour: 15,
                        minute: 15,
                        enable: true,
                    },
                    {
                        hour: 16,
                        minute: 0,
                        enable: true,
                    },
                    {
                        hour: 16,
                        minute: 5,
                        enable: true,
                    },
                    {
                        hour: 16,
                        minute: 50,
                        enable: true,
                    },
                ],

                allAlarmEnable: true,
            }
        },
        mounted() {
            this.getCurrentHour();
            this.getCurrentDate();
            this.interval = setInterval(this.getCurrentHour, 1000);
        },
        beforeDestroy() {
            clearInterval(this.interval);
        },
        methods: {
            getCurrentHour() {
                let now = new Date();
                this.hours = now.getHours();
                this.minutes = now.getMinutes();
                this.seconds = now.getSeconds();
                this.checkAlarms();
            },
            getCurrentDate() {
                let today = new Date();
                this.day = String(today.getDate()).padStart(2, '0');

                const monthNames = ["janvier", "février", "mars", "avril", "mai", "juin",
                    "juillet", "août", "septembre", "octobre", "novembre", "décembre"
                ];
                this.month =  monthNames[today.getMonth()];
                this.year = today.getFullYear();
            },
            checkAlarms() {
                let audio = new Audio('school-bell.mp3');
                for (let i = 0; i < this.alarms.length; i++) {
                    if (this.alarms[i].enable && this.hours === this.alarms[i].hour && this.minutes === this.alarms[i].minute && this.seconds === 0) {
                        audio.play();
                    }
                }
            },
            toggleAllSwitches() {
                let newStatue = !this.allAlarmEnable;
                for (let i = 0; i < this.alarms.length; i++) {
                    this.alarms[i].enable = newStatue;
                }
                this.allAlarmEnable = newStatue;

            },
            countdown(alarm) {
                const alarmHour = new Date(0,0,0, alarm.hour-1, alarm.minute, 0);
                const currentHour = new Date(0,0,0, this.hours, this.minutes, this.seconds);

                const countdown = new Date(alarmHour - currentHour);
                return String(countdown.getHours()).padStart(2, '0') + ':' + String(countdown.getMinutes()).padStart(2, '0') + '\'' + String(countdown.getSeconds()).padStart(2, '0');
            },
        },
        computed: {
            // nextAlarmIndex() {
            //     let nextAlarmIndex = 2;
            //     let now = new Date();
            //     let smallestInterval = new Date();
            //     for (let i = 0; i < this.alarms.length; i++) {
            //         let currentHour = new Date(0,0,0, this.alarms[i].hour, this.alarms[i].minute, 0);
            //         if (currentHour - now < smallestInterval) {
            //             nextAlarmIndex = i;
            //             console.log(currentHour - now);
            //             console.log(smallestInterval);
            //             smallestInterval = currentHour - now;
            //         }
            //     }
            //
            //     return nextAlarmIndex;
            // }
        },
        components: {
            'clock': window.httpVueLoader('./vue-module/clock.vue')
        },
    }
</script>

<style scoped>
    .input-alarm {
        display: inline;
        width: auto;
    }
    .toggle-on.btn {
        padding-right: 12px;
    }
    .countdown {
        color: #b5b5b5;
        font-weight: lighter;
    }
    .title-container {
        padding: .75rem 1.25rem;
    }
    .all-switches-container {
        display: flex;
        align-items: center;
    }
    .list-group {
        columns: 2;
        -webkit-columns: 2;
        -moz-columns: 2;
    }

    .sidebar {
        height: 100%; /* 100% Full-height */
        width: 0; /* 0 width - change this with JavaScript */
        position: fixed; /* Stay in place */
        z-index: 1; /* Stay on top */
        top: 0;
        right: 0;
        background-color: #f0f0f0; /* Black*/
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 60px; /* Place content 60px from the top */
        transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
    }

    /* The sidebar links */
    .sidebar a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
    }

    /* When you mouse over the navigation links, change their color */
    .sidebar a:hover {
        color: #f1f1f1;
    }

    /* Position and style the close button (top right corner) */
    .sidebar .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }

    /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
    @media screen and (max-height: 450px) {
        .sidebar {padding-top: 15px;}
        .sidebar a {font-size: 18px;}
    }
</style>