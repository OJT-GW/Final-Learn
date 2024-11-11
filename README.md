# Base ReactJs

## Mô Tả

Dự án này là một ứng dụng React được tổ chức theo mô hình thư mục rõ ràng, giúp dễ dàng quản lý và mở rộng các tính năng. 

## Cấu trúc Thư Mục

/src
  /app
    /components           # Thành phần chung cho toàn ứng dụng
    /hooks                # Hooks dùng chung
    /utils                # Các tiện ích
    /context              # Context API cho trạng thái toàn cầu
    /reducers             # Reducers nếu sử dụng useReducer hoặc Redux
    /styles               # Styles cho ứng dụng
    /routes               # Cấu hình routing cho ứng dụng
    /types                # Type definitions nếu sử dụng TypeScript
  /features
   /FeatureA               # Tính năng A
    /components           # Thành phần riêng của FeatureA
    /hooks                # Hooks riêng của FeatureA
    /services             # Dịch vụ (API, quản lý trạng thái, v.v.)
    /types                # Các kiểu dữ liệu riêng cho tính năng A
    /tests                # Bài kiểm thử cho tính năng A
    /constants            # Hằng số liên quan đến tính năng A
    /styles               # Styles cho tính năng A
    /helpers              # Hàm trợ giúp cho tính năng A
    /state                # Quản lý trạng thái cho tính năng A (Redux)
    - FeatureA.tsx        # File chính của tính năng A
   /FeatureB               # Tính năng B
    ...
 /shared
  /components               # Thành phần dùng chung (Button, Modal, v.v.)
  /hooks                    # Hooks dùng chung (useLocalStorage, useFetch, v.v.)
  /utils                    # Các tiện ích (formatDate, validateEmail, v.v.)
  /types                    # Kiểu dữ liệu dùng chung (TypeScript)
  /constants                # Hằng số dùng chung (URL, thông báo lỗi)
  /services                 # Dịch vụ API (apiService, authService)
  /styles                   # Styles dùng chung (CSS toàn cục)
  /validation               # Schema xác thực (Yup, Joi)
  /localization             # Tệp ngôn ngữ cho i18n
  /testing                  # Tiện ích hỗ trợ kiểm thử (mock functions, render helpers)