package com.kezik.territorialDistribution.patterns.iterator;

public class Validate implements Collection {
    private final String[] dataOnValidate;

    public Validate(String[] dataOnValidate) {
        this.dataOnValidate = dataOnValidate;
    }

    @Override
    public Iterator getIterator() {
        return new userValidate();
    }

    private class userValidate implements Iterator{
        int index;
        @Override
        public boolean hasNext() {
            if(index < dataOnValidate.length){
                return true;
            }
            return false;
        }

        @Override
        public Object next() {
            return dataOnValidate[index++];
        }
    }
}
