# 1Password Documentation

## Password Available fieldTypes are
 - password  
 - text  
 - email  
 - url  
 - date (format: YYYY-MM-DD)  
 - monthYear (format: YYYYMM or YYYY/MM)  
 - phone  
 - otp  
 - file  

## Three distinct 
| ID |      NAME |  
| - | - |  
| vw8qjYEvsdCcZoULJRCqopy7Rv | Development |  
| 2RNjh43dpHB9sDqZXEHiiw7zTe | Personal |  
| cGxbZbV2pxKBmVJe9oWja4K8km | Work |  


## Subcommands

| subcommand | action |  
| - | - |  
| group create: | Create a group |  
| group delete: | Remove a group |  
| group edit: | Edit a group's name or description |  
| group get: | Get details about a group |  
| group list: | List groups |  
| group user: | Manage group membership |  


## Categories are:

 - API Credential  
 - Bank Account  
 - Credit Card  
 - Database  
 - Document  
 - Driver License  
 - Email Account  
 - Identity  
 - Login  
 - Membership  
 - Outdoor License  
 - Passport  
 - Password  
 - Reward Program  
 - Secure Note  
 - Server  
 - Social Security Number  
 - Software License  
 - Wireless Router  


## Assignments  

Assignment statements are formatted like this:    

`[<section>.]<field>[[<fieldType>]]=<value>`

 - `section` (Optional) The name of the section where you want to create the field.  
 - `field` The name of the field you want to create.  
 - `fieldType` The type of field you want to create. If unspecified, fieldType will default to password.  
 - `value` The information you want to save in the field.  

## Folder Structure

A single Template is a folder with at least a devcontainer-template.json and devcontainer.json. Additional files are permitted and are packaged along side the required files.

```
+-- template
|    +-- devcontainer-template.json
|    +-- .devcontainer.json
|    +-- (other files)
```

## devcontainer-template.json properties

The devcontainer-template.json file defines information about the Template to be used by any supporting tools. The properties of the file are as follows:

| Property | 	Type |	Description | 
| - | - | - |
| id | 	string	| ID of the Template. The id should be unique in the context of the repository/published package where the Template exists and must match the name of the  | directory | where |  the devcontainer-template.json resides. | 
| version | 	string |	The semantic version of the Template. | 
| name | 	string |	Name of the Template. | 
| description | 	string |	Description of the Template. | 
| documentationURL | 	string|	Url that points to the documentation of the Template. | 
| licenseURL  |	string	|Url that points to the license of the Template. | 
| options  |	object|	A map of options that the supporting tools should use to populate different configuration options for the Template.  
| platforms 	|array	| Languages and platforms supported by the Template. | 
| publisher| string	| Name of the publisher/maintainer of the Template. | 
| keywords |	array	| List of strings relevant to a user that would search for this Template. | 