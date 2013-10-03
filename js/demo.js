var
tp1 = new TimePicker('.timePicker1'),

tp2 = new TimePicker('.timePicker2', {
	showSeconds: true,
	stepMinutes: 5,
	stepSeconds: 1
}),

tp3 = new TimePicker('.timePicker3', {
	showSeconds: true,
	imperial: true,
	hideInput: false
});
