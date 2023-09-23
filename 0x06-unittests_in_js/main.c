#include <stdio.h>

typedef struct ops {
    char o;
    int (*f)(int , int);
} ops_t;

int add_two(int x, int y) {
    return (x + y);
}

int sub(int x, int y) {
    return (x - y);
}

int (*get_func(char o))(int, int) {
    int len = 2;
    const ops_t func_map[2] = {{'a', add_two},{'s', sub}};

    for (int i =0; i < len; i++) {
        if (func_map[i].o == o)
            return func_map[i].f;
    }
    return (NULL);
}

int main(void) {
    int (*f)(int , int) = get_func('s');
    if (!f) {
        return 0;
    }
    int b = f(22, 33);

    printf("the res is %d\n", b );
}