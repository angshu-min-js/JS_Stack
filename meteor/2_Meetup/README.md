# Tech Meetup, using MeteorJS
```
#Windows:
mkdir shared
#VagrantFile
config.vm.synced_folder './shared', '/home/vagrant/shared'

config.vm.network :forwarded_port, guest: 3000, host: 3000

config.vm.provider "virtualbox" do |v|
    v.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
end

#VM Box
mkdir -p myapp/.meteor/local
sudo mount --bind /home/vagrant/myapp/.meteor/local/ /vagrant/myapp/.meteor/local/
```
- Get VM Local IP
- both/router/meta.js: title, suffix
