<?php
namespace CoreUI;


/**
 * Контекстные сообщения
 * Class Alert
 */
class Alert {

    protected static $added_script = false;
    private static $memory         = array();
    private static $in_memory      = false;

    /**
     * Alert constructor.
     * @param bool $in_memory
     */
    public function __construct($in_memory = false) {
        self::$in_memory = (bool)$in_memory;
    }


    /**
     * Возвращает сообщение
     * @param string $type
     * @param string $header
     * @param string $message
     * @return string
     */
    public static function create($type, $message, $header = '') {

        if ( ! self::$added_script) {
            self::$added_script = true;
            $container_dir = substr(__DIR__, strlen($_SERVER['DOCUMENT_ROOT']));
            $scripts = "<link rel=\"stylesheet\" type=\"text/css\" href=\"{$container_dir}/html/css/styles.css\"/>";
        } else {
            $scripts = '';
        }

        $header_str    = $header ? "<h4>{$header}</h4>" : '';
        $alert_message = "{$scripts}<div class=\"alert alert-{$type}\">{$header_str}{$message}</div>";

        if (self::$in_memory) {
            self::$memory[] = [$type, $alert_message];
        }

        self::$in_memory = false;
        return $alert_message;
    }


    /**
     * Возвращает сообщение об успешном выполнении
     * @param string $message
     * @param string $header
     * @return string
     */
    public static function success($message, $header = '') {
        return self::create('success', $message, $header);
    }


    /**
     * Возвращает сообщение с информацией
     * @param string $message
     * @param string $header
     * @return string
     */
    public static function info($message, $header = '') {
        return self::create('info', $message, $header);
    }


    /**
     * Возвращает сообщение с предупреждением
     * @param string $header,
     * @param string $message
     * @return string
     */
    public static function warning($message, $header = '') {
        return self::create('warning', $message, $header);
    }


    /**
     * Возвращает сообщение об ошибке или опасности
     * @param string $header,
     * @param string $message
     * @return string
     */
    public static function danger($message, $header = '') {
        return self::create('danger', $message, $header);
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
     * @return string
     */
    public static function get($type = '') {

        $alert_messages = array();

        if ( ! empty(self::$memory)) {
            foreach (self::$memory as $key => $alert_message) {
                if ( ! empty($alert_message[0]) && is_string($alert_message[0]) &&
                    ! empty($alert_message[1]) && is_string($alert_message[1]) &&
                    (empty($type) || $type == $alert_message[0])
                ) {
                    $alert_messages[] = $alert_message[1];
                    unset(self::$memory[$key]);
                }
            }
        }

        return implode('', $alert_messages);
    }
}