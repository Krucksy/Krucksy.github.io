<template>
    <div>
        <div class="hour-container col">
            <span id="hour">{{ hours }}:{{ minutes }}'{{ seconds }}</span>
        </div>
        <div class="date-container col">
            <span id="date">{{ day }} {{ month }} {{ year }}</span>
        </div>
    </div>
</template>

<script>
    module.exports = {
        name: "clock",
        props: [
            'hours',
            'minutes',
            'seconds',
            'day',
            'month',
            'year',
        ]
    }
</script>

<style scoped>
    .hour-container,
    .date-container {
        display: flex;
        justify-content: center;
    }
    .hour-container #hour {
        font-size: 10rem;
        font-weight: bold;
    }
    .date-container #date {
        font-size: 2rem;
        font-weight: lighter;
    }
    @media only screen and (max-width: 692px) {
        .hour-container #hour {
            font-size: 5rem;
        }
    }
</style>