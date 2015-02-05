# grunt-hjson

Example:

```
hjson:
	build:
		files: [
			expand: yes
			cwd: "hjson/"
			src: "*.hjson"
			dest: "json/"
			ext: ".json"
		]
```

## License
Copyright (c) 2015 neutra
Licensed under the MIT license.
