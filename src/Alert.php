<?php
namespace CoreUI;


/**
 * Контекстные сообщения
 * Class Alert
 */
class Alert {

    /**
     * Возвращает сообщение
     * @param string $view
     * @param string $message
     * @param string $title
     * @return array
     */
    public static function create($view, $message, $title = '') {

        $data = [
            'view' => $view,
        ];

        if ($title) {
            $data['title'] = $title;
        }
        $data['message'] = $message;

        return $data;
    }


    /**
     * Возвращает данные сообщения primary
     * @param string $message
     * @param string $title
     * @return array
     */
    public static function primary($message, $title = '') {
        return self::create('primary', $message, $title);
    }


    /**
     * Возвращает данные сообщения secondary
     * @param string $message
     * @param string $title
     * @return array
     */
    public static function secondary($message, $title = '') {
        return self::create('secondary', $message, $title);
    }


    /**
     * Возвращает данные сообщения success
     * @param string $message
     * @param string $title
     * @return array
     */
    public static function success($message, $title = '') {
        return self::create('success', $message, $title);
    }


    /**
     * Возвращает данные сообщения info
     * @param string $message
     * @param string $title
     * @return array
     */
    public static function info($message, $title = '') {
        return self::create('info', $message, $title);
    }


    /**
     * Возвращает данные сообщения warning
     * @param string $message
     * @param string $title
     * @return array
     */
    public static function warning($message, $title = '') {
        return self::create('warning', $message, $title);
    }


    /**
     * Возвращает данные сообщения danger
     * @param string $message
     * @param string $title
     * @return array
     */
    public static function danger($message, $title = '') {
        return self::create('danger', $message, $title);
    }


    /**
     * Возвращает данные сообщения light
     * @param string $message
     * @param string $title
     * @return array
     */
    public static function light($message, $title = '') {
        return self::create('light', $message, $title);
    }


    /**
     * Возвращает данные сообщения
     * @param string $message
     * @param string $title
     * @return array
     */
    public static function dark($message, $title = '') {
        return self::create('dark', $message, $title);
    }
}