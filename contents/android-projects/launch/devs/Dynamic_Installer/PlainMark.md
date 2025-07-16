## Introduction

PlainMark is a lightweight text formatting  designed to create clean, structured, and human-readable outputs, especially in environments with limited graphical support. Tailored for text-based systems like Android's Recovery, Magisk, and KSU.


## Syntax rules
1. All tags must be written on separate lines. Inline tags are **not supported**.
2. Extra whitespace or line breaks at the beginning and end of content are automatically removed unless they are contained within a special tag such as `<pre>`.
```
  <box>
    <center>
      Centered text inside a box.
    </center>
    Content below the centered text.
  </box>
```

## PlainMark Elements

* **\<box\>**

  Groups content into a visually distinct block surrounded by a border of lines (`---`) forming a box-like appearance. Boxes cannot contain nested boxes.

  ```
  <box>
    Content inside the box.
  </box>
  ```

* **\<linebox/\>**

  Creates a horizontal division inside a box. This tag only works within a `<box>` and allows multiple divisions.

  ```
  <box>
    Section 1
    <linebox/>
    Section 2
    <linebox/>
    Section 3
  </box>
  ```

* **\<center\>**

  Centers text either inside or outside a box (Multiline support).

  ```
  <center>
    Centered text content.
  </center>
  ```

* **\<pre\>**

  Preserves spaces and line breaks as they are written. Additionally, `<pre>` ensures that all content, including internal tags or special characters, is preserved literally. However, completely empty lines are not preserved; they must contain at least one space or they will be ignored.

  ```
  <pre>
    Literal text example:
    <center>
        This tag will not be processed.
    </center>
    
    Line 3 (empty lines without spaces are ignored)
  </pre>
  ```

* **\<table\>**

  Maintains consistent column sizes regardless of content length. Rows and columns are visually separated by lines (`---`), similar to `<box>`. It does not currently support other tags, and due to its current syntax, each row must contain single-line content.

  ```
  <table>
    Column 1       | Column 2      | Column 3
    Row 1 Data     | Data Here     | Final Data
    Row 2 Data     | More Data     | Even More
  </table>
  ```

* **\<table-fixed\>**

  Automatically adjusts column widths based on content, which may cause it to overflow if content is too wide. Rows and columns are visually separated by lines (`---`), similar to `<table>`. It does not currently support other tags, and due to its current syntax, each row must contain single-line content.

  ```
  <table-fixed>
    Column 1       | Column 2           | Column 3
    Short Data     | Very Long Content  | Final Data
    Row 2 Data     | More Data          | Even More
  </table-fixed>
  ```

* **\<ol\>**

  Creates a numbered list. It can be inside or outside a box.

  ```
  <ol>
    Step 1
    Step 2
    Step 3
  </ol>
  ```

* **\<ul\>**

  Creates a bulleted list. It can be inside or outside a box.

  ```
  <ul>
    Item 1
    Item 2
    Item 3
  </ul>
  ```
