```
industry
2018         \
              --------merge----->maps
temperature   /
2018


```

```js
url = /merge/?industry=2018&?temperature=2018
url = /merge/?industry=danang&?temperature=danang
url = /merge/id/:id/city/:city
url = /merge/id/temperature-industry/city/danang
url = /merge/id/temperature-industry/year/2018
/merge/
```

```js
/merge/graph1/:graph_contest1/graph2/:graph_contest2/subject1/:subject1/subject2/:subject2/city/:cityid/year/:year
```

```js
mashup = {
	name: "Free%20City%20Bikes%20near%20parks",
	widgets: [
		{ url: "./WIDGETS/G_LocationWidget/index.html", x: 79, y: 446 },
		{ url: "./WIDGETS/GoogleMapWidget/index.html", x: 749, y: 112 },
		{ url: "./WIDGETS/G_CityBikeWidget/index.html", x: 72, y: 108 },
		{ url: "./WIDGETS/O_GeoMergeWidget/index.html", x: 407, y: 305 },
	],
	wires: [
		{
			src: { terminal: "output", widgetId: 2 },
			tgt: { terminal: "input1", widgetId: 3 },
		},
		{
			src: { terminal: "output", widgetId: 0 },
			tgt: { terminal: "input2", widgetId: 3 },
		},
		{
			src: { terminal: "output", widgetId: 3 },
			tgt: { terminal: "input", widgetId: 1 },
		},
	],
};
```
