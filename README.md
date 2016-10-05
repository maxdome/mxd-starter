# Development

## Example

Set the commands in the `package.json`:
```
{
  "scripts": {
    "start": "mxd-start",
    "status" : "mxd-status",
    "stop" : "mxd-stop"
  }
}
```


# Systemadministration

## Configuration

The pm2 options are a bit special, because the `mxd-start` script doesn't get the `config` object like other packages. 
The script use directly the `mxd-starter` attribute of the `package.json` and/or `config/properties.json`.

**Important:** Also the overwrite logic is special. Setting the `mxd-start` attribute in the `config/properties.json` doesn't overwrite the complete tree of the attribute of the `package.json`, only the defined subattributes will be overwritten.

`package.json` and/or `config/properties.json` (instances are mandatory if it should be different to the amount of CPU):
```
{
  "mxd-starter": {
    "instances": 1
  }
}
```
