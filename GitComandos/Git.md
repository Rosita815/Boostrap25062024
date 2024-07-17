1. **Crear y cambiar a la nueva rama:**
    ```bash
    git branch

    git checkout -b nombre-nueva-rama nombre-rama-existente
    ```

2. **Verificar el estado del repositorio:**
    ```bash
    git status
    ```

3. **Añadir los cambios al área de preparación:**
    ```bash
    git add .
    ```

4. **Verificar el estado del repositorio nuevamente:**
    ```bash
    git status
    ```

5. **Hacer el commit con un mensaje descriptivo:**
    ```bash
    git commit -m "Proyecto base"
    ```

6. **Publicar la nueva rama en el repositorio remoto:**
    ```bash
    git push --set-upstream origin nombre-nueva-rama
    ```
    *El primer push con `--set-upstream` establece el repositorio remoto y la rama para futuros push.*

    *Publicamos la rama `origin/nombre-nueva-rama` una única vez, ya que el repositorio remoto y la rama se especifican en la primera vez.*

### Para próximos cambios:

7. **Verificar el estado del repositorio:**
    ```bash
    git status
    ```

8. **Añadir los cambios al área de preparación:**
    ```bash
    git add .
    ```

9. **Verificar el estado del repositorio nuevamente:**
    ```bash
    git status
    ```

10. **Hacer el commit con un mensaje descriptivo:**
    ```bash
    git commit -m "Descripción de los nuevos cambios"
    ```

11. **Hacer el push de los cambios al repositorio remoto:**
    ```bash
    git push
    ```
    *Después de hacer el primer push con la opción `--set-upstream`, podrás usar simplemente `git push` para futuros cambios en la misma rama.*