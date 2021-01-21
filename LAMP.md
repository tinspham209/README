# Trac Nghiem

### Hãy cho biết câu lệnh SQL nào sau đây sẽ tạo ra lỗi khi thực thi?

`IF NOT EXISTS CREATE DATABASE ‘CMU’`

### Trong PHP, khi sử dụng hàm session_start() ta phải đắt?

Trước thẻ html

### Khả năng để cho phép Apache lưu trữ nhiều trang web trên 1 host duy nhất?

Virtual Hosting

### Hãy cho biết tập lệnh nào sau đây sẽ thực thi thành công?

`select ‘username’ FROM member where id = 18 order by id;`

### Hãy cho biết kq trả về của đoạn mã: <?php function chaodtu{} {echo}....?

đại học DTan

### Thông tin trạng thái phiên làm việc được lưu trữ trong ?

`$\_session`

### Hàm\_\_trả về các trường trong hàng hiện tại thành 1 mảng được lập chỉ mục

`mysql_fetch_assoc()`

### Giả sử $content chứa 1 chuỗi câu lệnh php nào in ra 26 ký tự đầu tiền của $content

`print substr($content 26). ‘...’;`

### Giả sử file ‘index.php’ nằm ở vị trí /vả/wwlamp.vn/index.php .nếu bạn đã sử dụng hàm basename($\_sever[php_self]) trong trang của mình, g trị?

index.php

# Tra loi ngan

### Xóa biến của phiên làm việc trên php :

`unset($SESSION[“Biến Muốn Xóa”]);`

### Xóa tất cả các biến :

`$SESSION = array();`

### Bắt đầu phiên là việc :

`$SESSION_start();`

### Kết thúc phiên làm việc :

`$SESSION_destroy();`

### nếu thiết lập session cookie lifetime với giá trị 120 hỏi cookie sẽ hoạt động ở khoảng thời gian nào (giây)

120 giây

### Để bật tgian hết hạn của 1 cookie thì dùng lệnh gì?

`setcookie(name, value, expire, path, domain, secure);`

Trong đó:

- `expire` là chỉ định ngày hết hạn của Cookie

### các frame phổ biến của PHP

- Laravel
- CodeIgniter
- Symfony
- Zend
- Phalcon
- CakePHP
- Yii
- FuelPHP

### giải thích vòng lặp foreach echo và print trong PHP

- Vòng lặp foreach trong PHP dùng để lặp các phần tử trong mảng
- Câu lệnh echo được sử dụng để hiển thị kết quả của một hoặc nhiều chuỗi ký tự, biến hoặc biểu thức toán học.... không trả về giá trị
- Câu Lệnh print được dùng để hiển thị giá trị của một giá trị dạng chuỗi, biến hoặc kết quả của biểu thức… luôn trả về giá trị là 1

### Các kiểu dữ liệu trong PHP

- Kiểu INT
- Kiểu Boolean
- Kiểu Số Thực (float, double)
- Kiểu Chuỗi
- Kiểu Mảng (array)
- Kiểu NULL
- Kiểu Đối Tượng (object)

### Cách để lấy giá trị cookie trong PHP

```
$_COOKIE[$name];
```

Trong đó: `$name` là tên của cookie các bạn muốn lấy.

### start session session destroy

`session_start()` : được sử dụng để bắt đầu phiên làm việc. Nó bắt đầu một phiên mới hoặc tiếp tục phiên hiện có. Nó trả về phiên hiện tại nếu phiên đã được tạo. Nếu phiên không khả dụng, nó sẽ tạo và trả về phiên mới.

`session_destroy()`: được sử dụng để hủy hoàn toàn tất cả các biến phiên.

### vai trò của apache

- Thiết lập kết nối giữa server và trình duyệt người dùng (Firefox, Google Chrome, Safari…)
- Chuyển file tới và lui giữa chúng (cấu trúc 2 chiều dạng client-server).

### Lệnh cài đặt và cấu hình ssh

```
apt-get install openssh-server -y
```

### Các thành phần trong mô hình triển khai lamp:

1. Cập nhật apt-get package lists
2. Cài đặt Apache
3. Cài MariaDB Database Server
4. Cài PHP 7.x
5. Cấu hình Apache để ưu tiên cho các file PHP
6. Kiểm tra lại PHP xử lý trên web Server
7. Chạy PHP-FPM với Apache
8. Cài đặt phpMyAdmin

### khi yêu cầu của người dùng gửi lên webserver thì những thông tin nào được truyền đến server. webserver sẽ trả về cho client những thông tin gì

- khi client gửi 1 request đến webserver.
- Webserver sẽ tìm kiếm, khi tìm thấy hàm đúng request của client.
- Webserver sẽ thực thi hàm đó, khi thực thi thành công, - Webserver sẽ trả lại cho client 1 response, bao gồm những thành phần mà client đã yêu cầu. Hoặc sẽ trả lại 1 đoạn lỗi (404ERROR,...)

### các lệnh để kiểm tra ip trên linux

```
curl ifconfig.me
ifconfig
ip addr
ip a
```

### chức năng của DNS sever

- Quá trình chuyển tên miền thành địa chỉ IP để cho trình duyệt hiểu và truy cập được vào

### Câu lệnh để thiết lập địa chỉ IP cho Ubuntu 20:

`nano /etc/netplan/(file cấu hình mạng)`

### Để khởi tạo dịch vụ trên linux dùng lệnh gì?

`systemctl start …(dịch vụ muốn chạy)`

### dùng để liệt kê tất cả các file trong linux dùng lệnh gì?

`ls`

### Cách thức nào truy cập vào SSH trên Linux?

`ssh root@ip`

### mysqli_connect() và PHP mysqli_close()? Ðiểm giống và khác. Chức năng?

- `mysqli_connect()` được sử dụng để kết nối với một MySQL database server.
- `mysqli_close()` thực hiện việc đóng kết nối cơ sở dữ liệu đã kết nối trước đó.

### Session và COOKIES khác nhau điểm nào?

1. **Cookie:**

- Cookie được lưu trữ trên trình duyệt của người dùng.
- Dữ liệu cookie được lưu trữ ở phía client.
- Dữ liệu cookie dễ dàng sửa đổi hoặc đánh cắp khi chúng được lưu trữ ở phía client.
- Dữ liệu cookie có sẵn trong trình duyệt đến khi expired.

2. **Session:**

- Session không được lưu trữ trên trình duyệt.
- Dữ liệu session được lưu trữ ở phía server.
- Dữ liệu session không dễ dàng sửa đổi vì chúng được lưu trữ ở phía máy chủ.
- Sau khi đóng trình duyệt sẽ hết phiên làm việc (session)

### PHP giống với ngôn ngữ nào?

Python, C#

### Trong 1 đoạn test ta dùng hàm gì để lấy ký tự trong PHP?

Hàm `substr`

### Lệnh để kiểm tra kết nối mạng trên linux ?

`ping`

### Lệnh để kiểm tra 1 hoạt động của dịch vụ bất kì trong linux ?

`service <service name> status`

### Dùng phương thức nào để chuyển dữ liệu từ client lên server trong php ?

GET/POST

### Cách lấy giá trị cookie trong php ?

`$bien=$Cookie[‘cookie_name’];`

### . dùng phương thức nào để truy cập ssh server : cho ví dụ:

`sudo service ssh start`

```php
foreach ($array as $key => $value){
    // Các dòng lệnh
}
```

Hoặc

```php
<?php foreach ($array as $value): ?>
    // Các dòng lệnh

<?php endforeach; ?>
```

Trong đó

- `$array` là mảng cần lặp,
- `$key` là số chỉ mục (mảng có chỉ mục) hoặc là key (trong mảng kết hợp),
- `$value` là giá trị của phần tử ở vị trí $key.
