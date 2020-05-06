

### Setting the virtual host
go to your xampp or appache `etc/extra` folder and there add this configuration code on your `httpd-vhosts.conf`

_NOTA:_ you can get your personal project path with the `pwd` command on the terminal.
```apache
# setting the agenda 
<VirtualHost *:80>
    ServerAdmin webmaster@agenda.tuto
    DocumentRoot "/path/toMy/project/folder/php"
    ServerName agenda.tuto
    ServerAlias www.agenda.tuto
    ErrorLog "logs/agenda.tuto-error_log"
    CustomLog "logs/agenda.tuto-access_log" common
    <Directory "/path/toMy/project/folder/php">
        Options Indexes
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```
after that, go to your system `etc` folder, and there add the new local url to your `hosts` file
```bash
# my agenda local UR
127.0.0.1   agenda.tuto
```