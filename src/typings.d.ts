// _.maxBy
declare module _ {
    interface LoDashStatic {
        /**
         * Gets the maximum value of collection. If collection is empty or falsey -Infinity is returned. If an iteratee
         * function is provided it’s invoked for each value in collection to generate the criterion by which the value
         * is ranked. The iteratee is bound to thisArg and invoked with three arguments: (value, index, collection).
         *
         * If a property name is provided for iteratee the created _.property style callback returns the property value
         * of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for iteratee the created _.matches style callback returns true for elements that
         * have the properties of the given object, else false.
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns the maximum value.
         */
        //maxBy<T>(
        //    collection: List<T>,
        //    field: string
        //): T;
        
        maxBy<T>(
            collection: List<T>,
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): T;

        maxBy<T>(
            collection: Dictionary<T>,
            iteratee?: DictionaryIterator<T, any>,
            thisArg?: any
        ): T;

        maxBy<T>(
            collection: List<T>|Dictionary<T>,
            iteratee?: string,
            thisArg?: any
        ): T;

        maxBy<TObject extends {}, T>(
            collection: List<T>|Dictionary<T>,
            whereValue?: TObject
        ): T;
        
        
        
        minBy<T>(
            collection: List<T>,
            iteratee?: ListIterator<T, any>,
            thisArg?: any
        ): T;

        minBy<T>(
            collection: Dictionary<T>,
            iteratee?: DictionaryIterator<T, any>,
            thisArg?: any
        ): T;

        minBy<T>(
            collection: List<T>|Dictionary<T>,
            iteratee?: string,
            thisArg?: any
        ): T;

        minBy<TObject extends {}, T>(
            collection: List<T>|Dictionary<T>,
            whereValue?: TObject
        ): T;
    }
}