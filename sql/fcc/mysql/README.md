# Setup

## References

* MySQL Docker container: https://hub.docker.com/_/mysql

## create a server using a docker container

```
docker run --name learning-mysql -e MYSQL_ROOT_PASSWORD=notsosecretstuff -d mysql:latest
```

## get the IP of your server container

```
docker inspect learning-mysql -f "{{json .NetworkSettings.Networks }}" |grep -i --color ipaddress
```

Example output:
```
docker inspect learning-mysql -f "{{json .NetworkSettings.Networks }}" |grep -i --color ipaddress
{"bridge":{"IPAMConfig":null,"Links":null,"Aliases":null,"NetworkID":"3c8fd0adb4673143515a5cd6b1e0360ef9ff93b1bacd85a91e75b85633df332c","EndpointID":"23c5af6bf964ca3bce234067511423d68617b3344c40347e7392183e89710c25","Gateway":"172.17.0.1","IPAddress":"172.17.0.2","IPPrefixLen":16,"IPv6Gateway":"","GlobalIPv6Address":"","GlobalIPv6PrefixLen":0,"MacAddress":"02:42:ac:11:00:02","DriverOpts":null}}
```

So we can talk to the server on *"IPAddress":"172.17.0.2"*.

## connect using a client docker container

```
docker run -it --network bridge --rm mysql mysql -h 172.17.0.2  -u root -p
```

*NOTE:* It's good practice to connect to your DB as a non-root user. However, in this case it doesn't matter, as the db contents is example content from learning materials, so it's public anyway. We're not worried if someone comes along and downloads it.

Example output:
```
docker run -it --network bridge --rm mysql mysql -h 172.17.0.2  -u root -p
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 10
Server version: 8.0.27 MySQL Community Server - GPL

Copyright (c) 2000, 2021, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
```

## backup databases

```
export MYSQL_ROOT_PASSWORD="notsosecretstuff"
docker exec learning-mysql sh -c 'exec mysqldump --all-databases -uroot -p"$MYSQL_ROOT_PASSWORD"' > /some/path/on/your/host/all-databases.sql
```

## restore databases

```
export MYSQL_ROOT_PASSWORD="notsosecretstuff"
docker exec -i learning-mysql sh -c 'exec mysql -uroot -p"$MYSQL_ROOT_PASSWORD"' < /some/path/on/your/host/all-databases.sql
```
