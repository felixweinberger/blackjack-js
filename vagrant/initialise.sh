#!/usr/bin/env bash

# update and install apache web server
sudo apt-get update
sudo apt-get install -y apache2

# add zsh shell and adust config to be the default shell
sudo apt-get install -y zsh
wget --no-check-certificate https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh 
sudo chsh -s /bin/zsh vagrant
zsh