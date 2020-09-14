Mấy hôm trước có đọc một bài viết trên các nhóm lập trình về việc dùng `if else`. Trong đó có đề cập đến vấn đề dùng `else` làm rối răm code, tạo nhiều case và có thể sinh ra nhiều bug không kiểm soát.
Tui là tui rất đồng ý với quan điểm trên, vì đã từng đọc code mà `if else` lồng nhau quá trời lun, nhìn mà muốn xỉu. Thay vì dùng `if else` lồng nhau, chúng ta có thể dùng `design pattern` để giải quyết. Nó giúp chia nhỏ các trường hợp, đóng gói vào được từng class và tất nhiên cũng debug dễ hơn rất nhiều.

<img src="https://i.imgur.com/BrTKLpH.jpg" alt="if-else" >

Nên hôm nay tui cũng thử mô phỏng lại bài toán đèn giao thông. Mà trong đó không dùng một lệnh `if` nào bằng **Javascript**.

Trước tiên thì xem nhẹ cái hình chạy mô phỏng trước nhé. Sau đó xem code sau cho dễ hiểu 😁

<img src="https://media2.giphy.com/media/j5oQP844Fl4VumjjBb/giphy.gif" alt="den-giao-thong" >

### Đây là mã nguồn

```js
var TrafficLight = function () {
	var colors = {
		red: { bg: "bg-danger", color: "text-danger", border: "border-danger" },
		yellow: {
			bg: "bg-warning",
			color: "text-warning",
			border: "border-warning",
		},
		green: {
			bg: "bg-success",
			color: "text-success",
			border: "border-success",
		},
	};

	var state = {};

	this.redViewer = null;
	this.yellowViewer = null;
	this.greenViewer = null;
	this.counterViewer = null;

	var timer = new Core.Timer({ interval: 1000 });

	this.start = function (redSeconds, yellowSeconds, greenSeconds) {
		timer.stop();
		clearState.bind(this)();
		this.counterViewer.html(0);
		state = {};

		createState.bind(this)("red", redSeconds, 0);
		createState.bind(this)("yellow", yellowSeconds, redSeconds);
		createState.bind(this)("green", greenSeconds, redSeconds + yellowSeconds);

		var stateIndex = 1;
		state[redSeconds + yellowSeconds + greenSeconds].afterRun = () =>
			(stateIndex = 1);

		var $this = this;
		timer.setOption(function (option) {
			option.onTick = function () {
				stateColor = state[stateIndex];
				clearState.bind($this)();
				stateColor.run();
				stateIndex++;
				stateColor.afterRun();
			};
		});
		timer.start();
	};

	var createState = function (colorName, seconds, start) {
		for (var i = 1; i <= seconds; i++) {
			stateColor = new TrafficLight.StateColor(
				colors[colorName],
				this[colorName + "Viewer"],
				this.counterViewer,
				seconds + start,
				start + i
			);
			state[(stateColor.stateIndex = start + i)] = stateColor;
		}
	};

	var clearState = function () {
		var arr = Object.keys(colors);
		for (var i = 0; i < arr.length; i++) {
			var colorName = arr[i];
			var color = colors[colorName];
			this[colorName + "Viewer"].removeClass(color.bg);
			this.counterViewer.removeClass(color.color).removeClass(color.border);
		}
	};
};
TrafficLight.StateColor = function (
	color,
	lightElement,
	counterViewer,
	maxSeconds,
	stateIndex
) {
	this.run = function () {
		lightElement.addClass(color.bg);
		counterViewer
			.addClass(color.color)
			.addClass(color.border)
			.html(maxSeconds - stateIndex);
	};
	this.afterRun = function () {};
};
```

### Đây là nội dung html

```js
<div class="row">
	<div class="col-md-12">
		<div class="form-inline row">
			<div class="form-group col-12">
				<label class="mr-2">Số gây</label>
				<input
					class="form-control xs-display-unset xs-width-unset bg-danger text-white input-seconds"
					id="input_1"
					name="Length"
					value="15"
					min="5"
					max="20"
					type="number"
				/>
				<input
					class="form-control xs-display-unset xs-width-unset bg-warning text-white input-seconds"
					id="input_2"
					name="Length"
					value="4"
					min="5"
					max="20"
					type="number"
				/>
				<input
					class="form-control xs-display-unset xs-width-unset bg-success text-white input-seconds"
					id="input_3"
					name="Length"
					value="12"
					min="5"
					max="20"
					type="number"
				/>
				<a class="btn btn-primary text-white ml-2" data-btn="Start">
					Bật đèn
				</a>
			</div>
		</div>
	</div>
	<div class="col-md-12 mt-4 justify-content-center text-center align-middle">
		<div class="traffic-light tl1 font-digital border-danger">&nbsp;</div>
		<div class="traffic-light tl2 font-digital border-warning">&nbsp;</div>
		<div class="traffic-light tl3 font-digital border-success">&nbsp;</div>
		<div class="traffic-light font-digital tl4">0</div>
	</div>
</div>
```

### Và cuối cùng là mã nguồn thực thi chạy đèn giao thông

```js
var content = $("article");
var trafficLight = new TrafficLight();
trafficLight.redViewer = content.find(".tl1");
trafficLight.yellowViewer = content.find(".tl2");
trafficLight.greenViewer = content.find(".tl3");
trafficLight.counterViewer = content.find(".tl4");

var btn = content.find("[data-btn=Start]");
btn.click(function () {
	trafficLight.start(
		parseInt(content.find("#input_1").val()),
		parseInt(content.find("#input_2").val()),
		parseInt(content.find("#input_3").val())
	);
});
```

### Tổng kết

Túm cái quần lại, code mà không có `if` thì nó cũng gọi là thế giới lắm luôn.
