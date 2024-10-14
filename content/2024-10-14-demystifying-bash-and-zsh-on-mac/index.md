---
title: Demystifying Bash and Zsh on Mac
slug: demystifying-bash-and-zsh-on-mac
tags: [bash, zsh, shell, mac]
authors: [spencerlepine]
date: 2024-10-14T12:00
---

If you’re a mac-based developer like me, and you never quite understood the difference between Bash and Zsh, this article is for you.

<!-- truncate --> 

![article thumbnail](./thumbnail.png)

In my experience, configuring the shell and $PATH has always been a confusing and fragile task. Let’s demystify the shell and define best practices for configuring your local machine.

> **TL;DR** - Zsh and Bash or both unix shells, Zsh is a beefed up version. macOS defaults to Zsh, linux defaults to Bash. For a local machine, configure Zsh. For scripting and deployments, use Bash (cross-platform).

## History

Bash is the original unix shell that has been around since 1989. It’s deeply embedded into both Linux and macOS systems. Apple began moving towards Zsh (pronounced “Zee Shell”) due to licensing changes. Zsh is an extended and improved version of Bash. Eventually, in the release of macOS Catalina in 2019, Zsh became the default shell for macOS.

- Linux default shell: **Bash**
- macOS default shell: **Zsh**

![Bash vs Zsh Doge meme](./doge-zsh-vs-bash.png)

## Terminal: Which to Use?

It’s recommended to stick with Zsh as your default shell for local development. It includes more modern features and better community support.

You’ll want to configure both your terminal shell and code editor default shell. To find out what your currently using, open the terminal and run the following command:

```bash
$ echo $SHELL
/bin/zsh
```

## Scripting: Which to Use?

It’s recommended to use Bash for scripting and deployment. This is best for compatibility and cross-platform usage, as most Linux systems still use Bash.

No configuration is needed, you’ll just add a simple shebang to the top of your script. Here’s an example `hello.sh`

```bash
#!/bin/bash

# This is a comment. It won't be executed.

# Define a function
greet() {
    echo "Hello, World!"
}

# Call the function
greet
```

```bash
# make the script executable
chmod +x hello.sh
```

```bash
# run the script
./hello.sh
```

## One-time Laptop Setup

Ensure your local machine has the proper Zsh setup by reviewing the following steps.

> It’s highly recommend to install Homebrew as well, which helps you avoid manually configuring the $PATH for tools/languages (e.g. JavaScript, Python, Java).

1. Open your terminal and set your default shell to Zsh

```bash
chsh -s $(which zsh)
```

2.Create the `.zshrc` config file

```bash
nano ~/.zshrc
```

```bash
# ~/.zshrc

# Enable color support
autoload -Uz compinit
compinit

# Set prompt
PROMPT='%F{cyan}%n@%m %F{green}%~ %F{yellow}%% %f'

# Enable command completion
setopt complete_in_word
setopt auto_cd
setopt correct

# Set History Options
HISTSIZE=10000
SAVEHIST=10000
setopt append_history
setopt share_history
```

3. Install Homebrew (macOS package manager)

```bash
/bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"
```

```bash
cat ~/.zshrc
# verify homebrew added the $PATH variable
```

```bash
# ~/.zshrc

# ...

# Homebrew Path
# export PATH="/usr/local/bin:$PATH" # For Intel Macs (legacy)
export PATH="/opt/homebrew/bin:$PATH"  # For Apple Silicon Macs
```

4. Verify Homebrew and Zsh are configured

```bash
$ source ~/.zshrc
$ echo $SHELL
/bin/zsh
$ brew --version
Homebrew 4.3.17
$ echo $PATH
/opt/homebrew/bin:...
```

5. Set the default shell for your code editor

For example, if you’re using _Visual Studio Code_:

1. Open Visual Studio Code

2. Open the search tool (hit `Cmd + Shift + P` )

3. Search “**Open User Settings (JSON)**”, hit enter

4. Ensure the Zsh shell is set:

```json
"terminal.integrated.defaultProfile.osx": "zsh"
```

## Migrating to a New Laptop

If you want to mirror an existing Zsh configuration to a new mac, it’s pretty straight-forward.

1. [old laptop] Export/save your existing `.zshrc` config

```bash
# ~/.zshrc
# Misc
export EDITOR=vim
export PATH=$HOME/bin:/usr/local/bin:$PATH

# Enable color support
autoload -Uz compinit
compinit

# Set prompt
PROMPT='%F{cyan}%n@%m %F{green}%~ %F{yellow}%% %f'

# Enable command completion
setopt complete_in_word
setopt auto_cd
setopt correct

# Set History Options
HISTSIZE=10000
SAVEHIST=10000
setopt append_history
setopt share_history

# Homebrew Path
# export PATH="/usr/local/bin:$PATH" # For Intel Macs (legacy)
export PATH="/opt/homebrew/bin:$PATH"  # For Apple Silicon Macs

# Node.js
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
nvm use v20
# Node.js end

# pnpm
export PNPM_HOME="/Users/notspencer/Library/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end

# oh-my-zsh
export ZSH="/Users/notspencer/.oh-my-zsh"
ZSH_THEME="robbyrussell"
plugins=(git)
source $ZSH/oh-my-zsh.sh
# oh-my-zsh end

# pyenv
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
if command -v pyenv 1>/dev/null 2>&1; then
  eval "$(pyenv init --path)"
  eval "$(pyenv init -)"
fi

export PYENV_ROOT="$HOME/.pyenv"
[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
# pyenv end
```

2. [old laptop] Generate a list of your existing Homebrew packages

```bash
$ brew list
==> Formulae
wget python
```

3. [new laptop] Configure Zsh on your new machine

```bash
# Set your default shell to Zsh
chsh -s $(which zsh)
```

```bash
# copy paste your existing .zshrc config
nano ~/.zshrc
```

```bash
# apply the config, look for any errors or missing installs
source ~/.zshrc
```

4. [new laptop] Install any missing tools/languages as needed.

```bash
# install homebrew
/bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"

# install packages
brew install wget python
```

## What is PATH?

You may have noticed your Zsh config using $PATH, but what is it exactly?

Whenever you install various tools on your local machine like homebrew, executable files are downloaded in `/bin` directories (short for binary). PATH is an environment variable for your operating system to find these executable files. It’s a list of directories, separated by colon ( `:` ), including the default `/usr/local/bin`.

```bash
$ echo $PATH
/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:<HOMEBREW_PATH>:<CUSTOM_PATH>
```

While most of the time, you only need to set it up once, it’s possible you’ll need to append another path if a software/tool comes with an executable in a custom directory.

## Conclusion

As a developer, it’s not required to be an expert on Zsh and Bash, but it’s useful to have context on where and why we use them. This article has covered the use-cases for each shell, as well as steps to configure your local machine. By following the best practices, we can avoid breaking our existing configuration, and use the blueprint to quickly set up a new machine.
