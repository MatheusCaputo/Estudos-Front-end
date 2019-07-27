const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/5 * 10 * * 6", function(){
    console.log("executando tarefa1", new Date().getSeconds());
});

setTimeout(function(){
    tarefa1.cancel();
}, 20000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 6)];
regra.hour = 10;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log("executando tarefa2", new Date().getSeconds());
});