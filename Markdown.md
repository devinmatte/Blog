Notetaking-In-Markdown
======================
This explains my notetaking method using Markdown, LaTeX and Pandoc and how I set it up. All Instructions listed here are written for *my* personal method. Once you understand how I set it up, there are plenty of ways you can adapt this knowledge to a setup that works for you.

Installation
============

In order to set up the installation you need a few things. First we need to determine which operating system you'll be using, and then follow the installation instructions after that.

Windows
-------
### 1. Install Atom
First we're going to need to grab Atom from [atom.io](https://atom.io/)

### 2. Install Pandoc
1. There is a package installer at pandoc’s [download page.](https://github.com/jgm/pandoc/releases/tag/1.19.1)
2. For PDF output, you’ll also need to install LaTeX.
    - If you're using *windows cmd prompt* then install [MiKTeX](https://miktex.org/)
    - If you plan to use *bash on ubuntu on windows* then run `sudo apt-get install texlive` in your bash client

### 3. Atom Plugins
Launch Atom and configure it to your liking then:

1. Install `markdown-preview-plus`
    - Search for Markdown Preview Plus in Atom's Settings view **File** › **Settings** › **Install** and click **Install**. Please allow 3-5 mins for installation. Alternatively if you would prefer to use the command line utility apm: `apm install markdown-preview-plus`

2. Disable Markdown Preview
    - Disable the built in Markdown Preview package. You can do this by searching for Markdown Preview in Atom's Settings view **File** › **Settings** › **Packages** and clicking **Disable**.

Linux
-----
### 1. Install Atom
First we're going to need to grab Atom from [atom.io](https://atom.io/)

### 2. Install Pandoc
1. First you need to install pandoc via Terminal `sudo apt-get install pandoc`
2. For PDF output, you’ll also need to install LaTeX `sudo apt-get install texlive`

### 3. Atom Plugins
Launch Atom and configure it to your liking then:

1. Install `markdown-preview-plus`
    - Search for Markdown Preview Plus in Atom's Settings view **File** › **Settings** › **Install** and click **Install**. Please allow 3-5 mins for installation. Alternatively if you would prefer to use the command line utility apm: `apm install markdown-preview-plus`

2. Disable Markdown Preview
    - Disable the built in Markdown Preview package. You can do this by searching for Markdown Preview in Atom's Settings view **File** › **Settings** › **Packages** and clicking **Disable**.

3. *(Optional)* Enable Pandoc
    - Optionally you may use Pandoc to render the Markdown preview. To enable Pandoc within MPP:
        1. Install pandoc
        2. Run `which pandoc` and note the full path to the Pandoc executable.
        3. On the MPP settings page enable **Enable Pandoc Parser**
        4. Enter the path from step 2 into **Pandoc Options: Path**


MacOS
------
I have not personally installed this on a MacOS system, so I cannot provide installation instructions, although I imagine they would be similar to the Linux instructions because MacOS has Bash installed by default.


How to Use
==========

Once everything has been installed you're ready to take notes in Markdown. Open up Atom to get started.

### 1. Create a new Markdown file
Once Atom is open use `ctrl + n` to open a new file tab. (Alternatively use **File** > **New File**)

From there use `ctrl + s` to save the file as `filename.md` the **.md** is important because it defines the file as a Markdown file.

### 2. Begin typing
Now you're ready to type in the document. There's just one last thing you need, to be able to see your working product. Use `ctrl + shift + M` to open the markdown preview. You must be clicked inside your markdown file tab to ensure the preview appears. If you're using LaTeX math make sure to press `ctrl + shift + X` to preview it in the preview window. There is a setting you can enable to enable math by default.

### 3. Export your work
Now that you've typed up some notes, maybe you want to print them, or share them with others. Well now comes the part where you use Pandoc.

1. Open up your Terminal (*cmd* in Windows and *Terminal* in Linux)
2. Run the command `pandoc path/to/file.md -o path/to/export.pdf`
    - Example: `pandoc ~/Documents/Notes/MathNotes.md -o ~/Documents/Notes/MathNotes.pdf`
    - If you're using *bash on ubuntu on windows* you need to run `export GHCRTS=-V0` once per session before it will work properly
3. Now if you go to the path where you set the **.pdf** file, you'll find your document waiting for you.
