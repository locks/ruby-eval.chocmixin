# ruby-eval.chocmixin

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

Ruby-eval will also print out anything sent to stdout

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