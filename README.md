# example

```package.json```:
```
{
  "scripts": {
    "start": "mxd-start",
    "status" : "mxd-status",
    "stop" : "mxd-stop"
  }
}
```

# config

## config object

The pm2 options are a bit special, because the ```mxd-start``` script doesn't get the ```config``` object like other packages. The script use directly the ```mxd-starter``` attribute of the ```package.json``` and/or ```config/properties.json```.
Also the overwrite logic is special. Setting the ```mxd-start``` attribute in the ```config/properties.json``` doesn't overwrite the complete tree of the attribute of the ```package.json```, only the defined subattributes will be overwritten

```package.json``` and/or ```config/properties.json```:
```
{
  "mxd-starter": {
    "name": "name",
    "instances": 1
  }
}
