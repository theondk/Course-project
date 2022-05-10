package com.kezik.territorialDistribution.patterns;

import java.io.FileWriter;
import java.io.IOException;
import java.util.Date;

public class Singleton {
    private static Singleton date;

    public static synchronized Singleton getInstance() {
        if (date == null) {
            date = new Singleton();
        }

        return date;
    }

    public void saveLog(String log, String path) {
        try {
            Date currentDate = new Date();
            String logFile = log + ": " + currentDate + "\n";
            FileWriter fw = new FileWriter(path, true);
            fw.append(logFile);
            fw.close();
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}
