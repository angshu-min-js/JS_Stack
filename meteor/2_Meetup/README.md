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
#Always
sudo mount --bind /home/vagrant/myapp/.meteor/local/ /vagrant/myapp/.meteor/local/
```
- both/router/meta.js: title, suffix
- client/templates/layouts/: header and footer
- client/stylesheets/base: custom.less
- client/templates/home/home.html: homepage
- changing login(username and email): both/accounts/config.js, https://github.com/meteor-useraccounts/core/blob/master/Guide.md
- meteor add chrismbeckett:toastr
- both/collection: meetups.js
- both/controller: meetups.js
