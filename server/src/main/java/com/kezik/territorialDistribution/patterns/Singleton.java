package com.kezik.territorialDistribution.patterns;

import java.io.FileWriter;
import java.io.IOException;
import java.util.Date;

public class Singleton {
    private static Singleton date;
    private static String PATH_TO_LOG_FILE = "logs.txt";

    public static synchronized Singleton getInstance() {
        if (date == null) {
            date = new Singleton();
        }

        return date;
    }

    public void saveLog(String log) {
        try {
            Date currentDate = new Date();
            String logFile = log + ": " + currentDate + "\n";
            FileWriter fw = new FileWriter(PATH_TO_LOG_FILE, true);
            fw.append(logFile);
            fw.close();
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}
