# API documentation

## Data description

Каждая запись об автомобиле состоит из следующих полей. Некоторые поля необязательные - см. описание типов данных.

- **id** - уникальный идентификатор, _number_
- **name** - марка машины, _string_
- **model** - модель машины, _string_
- **year** - год выпуска машины, _number?_
- **vin** - вин-номер машины, _string?_
- **company** - имя компании, _string?_
- **note** - комментарий, _string?_
- **rightHand** - праворульная машина или нет, _boolean_
- **currency** - валюта, _string_
- **price** - цена, _number_
- **phone** - номер телефона, _string_
- **ein** - идентификационный номер работника, _string_
- **dateFrom** - дата постановки на учет, _string_
- **dateTo** - дата снятия с учета, _string?_

# Endpoints

## GET /cars

http://localhost:3004/cars
Получает список всех записей об автомобилях

### Params

#### Sort

- Пример сортировки по названию автомобиля
  `/cars?_sort=name` ( в ответе должен быть первым автомобиль Aston Martin с id 36)
- Сортировка по цене по возрастанию
  `/cars?_sort=price&_order=asc` ( в ответе первым должен быть Suzuki Esteem с ценой 799 рублей)
- Сортировка по id по убыванию
  `/cars?_sort=id&_order=desc` ( в ответе должен быть первым Mercedes-Benz CLK-Class с id 45)

#### Search

- Пример поиска по названию ( получить все записи по машине Toyota)
  `/cars?name=Toyota` ( в ответе должно быть 5 элементов)
- Поиск не частичному совпадению (например вписав в поиск `volksw` )
  `/cars?name_like=volksw` - в запросе к полю ( в данном случае `name`), по которому ведется поиск, нужно добавить `_like` ( в ответе должно быть 2 записи о Volkswagen)

#### Pagination

- Номер страницы указывается параметром `_page`
  `cars?_page=2` ( в ответе 10 элементов с id 11 по 20 включительно)
- Количество элементов в странице указывается в параметре \_limit (например первая страница с 20-ю элементами)
  `cars?_page=1&_limit=20` ( в ответе 10 элементов с id 1 по 20 включительно)

---

##### Параметры sort, search и pagination можно комбинировать вместе

---

### Response example

Code 200

    [{
        "id": 1,
        "name": "Toyota",
        "model": "FJ Cruiser",
        "year": 2008,
        "vin": "5FRYD4H69EB382060",
        "company": "Thoughtblab",
        "note": "Unspecified occupant of three-wheeled motor vehicle injured in collision with pedal cycle in nontraffic accident, subsequent encounter",
        "rightHand": false,
        "currency": "Kuna",
        "price": 19862,
        "phone": "+385 833 147 1490",
        "ein": "20-7868360",
        "dateFrom": "18.06.2018",
        "dateTo": "10.07.2005"
    }]

## GET /cars/{id}

http://localhost:3004/cars/1
Получает одну запись об автомобиле по заданному id

### Params

    id - URL параметр

### Response example

Code 200

    {
        "id": 1,
        "name": "Toyota",
        "model": "FJ Cruiser",
        "year": 2008,
        "vin": "5FRYD4H69EB382060",
        "company": "Thoughtblab",
        "note": "Unspecified occupant of three-wheeled motor vehicle injured in collision with pedal cycle in nontraffic accident, subsequent encounter",
        "rightHand": false,
        "currency": "Kuna",
        "price": 19862,
        "phone": "+385 833 147 1490",
        "ein": "20-7868360",
        "dateFrom": "18.06.2018",
        "dateTo": "10.07.2005"
    }

## POST /cars

http://localhost:3004/cars
Создает новую запись об автомобиле

### Body format

    {
    	"name": "Toyota",
        "model": "FJ Cruiser",
        "year": 2008,
        "vin": "5FRYD4H69EB382060",
        "company": "Thoughtblab",
        "note": "Unspecified occupant of three-wheeled motor vehicle injured in collision with pedal cycle in nontraffic accident, subsequent encounter",
        "rightHand": false,
        "currency": "Kuna",
        "price": 19862,
        "phone": "+385 833 147 1490",
        "ein": "20-7868360",
        "dateFrom": "18.06.2018",
        "dateTo": "10.07.2005"
    }

### Response example

Code 201

    {
        "id": 1,
        "name": "Toyota",
        "model": "FJ Cruiser",
        "year": 2008,
        "vin": "5FRYD4H69EB382060",
        "company": "Thoughtblab",
        "note": "Unspecified occupant of three-wheeled motor vehicle injured in collision with pedal cycle in nontraffic accident, subsequent encounter",
        "rightHand": false,
        "currency": "Kuna",
        "price": 19862,
        "phone": "+385 833 147 1490",
        "ein": "20-7868360",
        "dateFrom": "18.06.2018",
        "dateTo": "10.07.2005"
    }

## DELETE /cars/{id}

http://localhost:3004/cars/1
Удаляет запись об автомобиле по данному id

### Params

    id - URL параметр

### Response example

Code 200

    {}

## PATCH /cars/{id}

http://localhost:3004/cars/1
Для редактирования некоторых данных об автомобиле по данному id

### Params

    id - URL параметр

### Body format

    {
        "company": "Google",
        "note": "Company changed",
        "dateTo": "11.11.2010"
    }

### Response example

Code 200

      {
        "id": 1,
        "name": "Toyota",
        "model": "FJ Cruiser",
        "year": 2008,
        "vin": "5FRYD4H69EB382060",
        "company": "Google",
        "note": "Company changed",
        "rightHand": false,
        "currency": "Kuna",
        "price": 19862,
        "phone": "+385 833 147 1490",
        "ein": "20-7868360",
        "dateFrom": "18.06.2018",
        "dateTo": "11.11.2010"
    }
