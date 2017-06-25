<?php
namespace CoreUI;


/**
 * Контекстные сообщения
 * Class Alert
 */
class Alert {

    private static $memory    = [];
    private static $in_memory = false;

    /**
     * Alert constructor.
     * @param bool $in_memory
     */
    public function __construct($in_memory = false) {
        self::$in_memory = (bool)$in_memory;
    }


    /**
     * Возвращает сообщение
     * @param string $view
     * @param string $message
     * @param string $title
     * @return array
     */
    public static function create($view, $message, $title = '') {

        $data = [
            'type' => 'alert',
            'view' => $view,
        ];

        if ($title) {
            $data['title'] = $title;
        }
        $data['message'] = $message;

        if (self::$in_memory) {
            self::$memory[] = [$view, $data];
        }

        self::$in_memory = false;
        return $data;
    }


    /**
     * Возвращает сообщение об успешном выполнении
     * @param string $message
     * @param string $title
     * @return array
     */
    public static function success($message, $title = '') {
        return self::create('success', $message, $title);
    }


    /**
     * Возвращает сообщение с информацией
     * @param string $message
     * @param string $title
     * @return array
     */
    public static function info($message, $title = '') {
        return self::create('info', $message, $title);
    }


    /**
     * Возвращает сообщение с предупреждением
     * @param string $message
     * @param string $title
     * @return array
     */
    public static function warning($message, $title = '') {
        return self::create('warning', $message, $title);
    }


    /**
     * Возвращает сообщение об ошибке или опасности
     * @param string $message
     * @param string $title
     * @return array
     */
    public static function danger($message, $title = '') {
        return self::create('danger', $message, $title);
    }


    /**
     * Запись следующего сообщения в память
     * @return Alert
     */
    public static function memory() {
        return new Alert(true);
    }


    /**
     * Возвращает сообщения из памяти
     * @param string $type
     * @return array
     */
    public static function get($type = '') {

        $alert_messages = [];

        if ( ! empty(self::$memory)) {
            foreach (self::$memory as $key => $alert_message) {
                if ( ! empty($alert_message[0]) && is_string($alert_message[0]) &&
                     ! empty($alert_message[1]) && is_array($alert_message[1]) &&
                    (empty($type) || $type === $alert_message[0])
                ) {
                    $alert_messages[] = $alert_message[1];
                    unset(self::$memory[$key]);
                }
            }
        }

        return $alert_messages;
    }
}