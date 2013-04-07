# ruby-eval.chocmixin

Leveraging `rcodetools` to bring annotated ruby code to your favourite text editor

## Setup

To run this mixin successfully you need to install the `rcodetools` gem, which contains `xmpfilter`. In your terminal, run the following command:

    $ gem install rcodetools

## Evaluate annotations

This mixin allows you to annotate your code and evaluate it, right from the text editor.

First we have

    # mixin.rb
    class Mixin
      def mixout
        3 + 4
      end
    end
    
    Mixin.new       
    Mixin.new.mixout

Then we just need to put the markers in place

    Mixin.new        # =>
    Mixin.new.mixout # =>

And press the magic shortcut, `cmd-opt-e`

    # mixin.rb
    class Mixin
      def mixout
        3 + 4
      end
    end
    
    Mixin.new        # => #<Mixin:0x007f93fc920918>
    Mixin.new.mixout # => 7

## Evaluate stdout

In addition to annotate your code, you can also emit stdout with `cmd-opt-shift-e`

    [1,2,3,4].each { |i| puts i }
    # >> 1
    # >> 2
    # >> 3
    # >> 4

## Credits

* rcodetools/xmpfilter authors
* Chocolat.app authors, alex gordon and jean nicolas
* locks (mixin author)
* kyrylo (first #pry person to visit this page)
* nicolau (my cat, the never-silent king of the jungle)