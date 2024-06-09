import { type ClassNameValue, extendTailwindMerge, twJoin } from 'tailwind-merge';

/**
 * Creates a custom `twMerge` function using the `extendTailwindMerge` utility.
 * This allows for extending or customizing the default behavior of the `twMerge` function.
 *
 * The provided configuration object is empty, which means it will use the default configuration
 * of `tailwind-merge`. However, you can add custom configurations to the object if needed.
 *
 * @const {Function} customTwMerge - The custom `twMerge` function.
 */
const customTwMerge = extendTailwindMerge({});

/**
 * Utility function designed to work with the `tailwind-merge` library.
 * It takes in one or more class lists and merges them into a single string of Tailwind CSS classes.
 *
 * @param {...ClassNameValue[]} classLists - A spread of arrays containing class names.
 * Each `ClassNameValue` can be a string, null, undefined, 0, or false.
 *
 * @returns {string} A string containing the merged Tailwind CSS classes.
 *
 * @example
 * const classes1 = ['bg-red-500', 'text-white'];
 * const classes2 = ['p-4', 'hover:bg-blue-500'];
 * const result = twClass(classes1, classes2);
 * console.log(result);  // Outputs: "bg-red-500 text-white p-4 hover:bg-blue-500"
 *
 * @example
 * // Handling conflicting classes
 * const conflictingClasses1 = ['bg-red-500', 'bg-blue-500'];
 * const conflictingClasses2 = ['p-4', 'p-2'];
 * const result2 = twClass(conflictingClasses1, conflictingClasses2);
 * console.log(result2);  // Outputs: "bg-blue-500 p-2"
 */
export default function twClass(...classLists: ClassNameValue[]): string {
  return customTwMerge(twJoin(classLists));
}
