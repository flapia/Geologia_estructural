# Módulo II: Deformación en el Régimen Frágil (Fracturas, Diaclasas y Fallas)

## 1. Mecánica de Fractura y Criterios de Falla

La deformación frágil o discontinua se caracteriza por la pérdida de cohesión y la generación de superficies discretas de ruptura (fallas, diaclasas, venas) cuando los esfuerzos superan la resistencia elástica del macizo rocoso. Se restringe principalmente a la corteza superior fría (primeros ~5 a 10–15 km), en lo que se conoce como régimen de deslizamiento friccional.

### 1.1. Criterios de Ruptura y Envolventes en el Espacio de Mohr ($\sigma_n, \tau$)
* **Criterio de Fricción de Coulomb-Navier (Fracturas de Cizalla)**:
  * Gobierna el fallo por cizalla en compresión. Se define mediante la recta envolvente:
    $$\tau = C_0 + \mu \, \sigma_n = C_0 + \sigma_n \tan\phi$$
    donde $C_0$ es la cohesión intrínseca (resistencia de la roca cuando el esfuerzo normal $\sigma_n = 0$), $\mu$ es el coeficiente de fricción interna y $\phi$ es el ángulo de fricción interna.
  * Los planos de fractura de cizalla conjugados se forman a un ángulo característico agudo respecto a $\sigma_1$ ($\theta \approx 30^\circ\text{–}35^\circ$), conteniendo la línea de intersección al eje intermedio $\sigma_2$.
  * **Criterio de reactivación friccional (Ley de Byerlee / Fallas preexistentes)**: Si ya existe un plano de discontinuidad, la cohesión es prácticamente nula ($C_0 = 0$) y la envolvente pasa por el origen; el movimiento se reanuda a un esfuerzo diferencial significativamente menor (deslizamiento friccional).

* **Criterio de Griffith (Fracturación Tensional)**:
  * Explica la rotura a partir de la concentración de esfuerzos en los extremos de microfisuras o defectos elípticos preexistentes.
  * La fractura por tensión pura ocurre cuando el esfuerzo principal menor alcanza la resistencia a la tracción ($\sigma_3 \le -T_0$) y el esfuerzo diferencial es pequeño ($\sigma_1 - \sigma_3 < 4T_0$). Teóricamente, la resistencia a la tracción es aproximadamente la mitad de la cohesión ($T_0 \approx C_0 / 2$).
  * En la mecánica de fractura lineal elástica (LEFM), la propagación en Modo I está controlada por el factor de intensidad de esfuerzo:
    $$K_I = Y \, \sigma_t \sqrt{\pi c}$$
    donde $\sigma_t$ es el esfuerzo tensional remoto, $c$ es la semilongitud de la grieta y $Y$ es un parámetro de forma geométrico. La rotura se propaga cuando $K_I \ge K_{Ic}$ (tenacidad a la fractura del material). Cuanto mayor es la fisura preexistente ($c$), menor es el esfuerzo remoto requerido para propagarla.

* **Influencia de la Presión de Poros / Fluidos ($P_f$)**:
  * De acuerdo con el principio de esfuerzo efectivo de Terzaghi:
    $$\sigma_n^* = \sigma_n - P_f$$
  * Un aumento en la presión de fluidos ($P_f$) reduce los esfuerzos normales en todos los planos por igual sin alterar el esfuerzo diferencial ($\sigma_1 - \sigma_3$), desplazando el círculo de Mohr hacia la izquierda.
  * Este mecanismo desencadena **hidrofracturación**, sismicidad inducida en yacimientos y reactivación de fallas a profundidades considerables donde los esfuerzos tectónicos por sí solos no alcanzarían la envolvente.
  * Al abrirse la fractura tensional, el volumen libre aumenta, la presión del fluido desciende abruptamente y los solutos minerales precipitan rápidamente, sellando la fractura en forma de venas o filones (*crack-seal*).

---

### 1.2. Clasificación Cinemática de Fracturas (Modos de Fractura)
* **Modo I (Apertura / Extensión)**:
  * Desplazamiento perpendicular al plano de discontinuidad.
  * Se orientan rigurosamente **paralelas al plano formado por $\sigma_1$ y $\sigma_2$, y perpendiculares al esfuerzo principal menor $\sigma_3$**.
  * *Morfología*: Grietas abiertas en superficie, fisuras, diques ígneos si son ocupadas por magma, o venas/filones si precipitan fluidos hidrotermales.
* **Modo II (Deslizamiento en el plano / Deslizamiento por cizalla)**:
  * Desplazamiento relativo paralelo al plano y perpendicular a la línea o frente de fractura (fallamiento por cizalla en el plano).
* **Modo III (Desgarre fuera del plano / Cizalla transversal)**:
  * Desplazamiento cizallante paralelo al plano de discontinuidad y paralelo a la línea o frente de propagación de fractura.
* **Modo IV (Antifisura / Cierre)**:
  * Desplazamiento en sentido de cierre por compactación localizada o disolución por presión (bandas de compactación, estilolitos). Los estilolitos se forman perpendiculares a la dirección del máximo acortamiento ($\sigma_1$).

---

### 1.3. Diaclasas y Sistemas de Fracturación
* Las diaclasas son fracturas Mode I sin desplazamiento relativo de cizalla apreciable paralelo al plano.
* **Sistemáticas vs. No Sistemáticas**:
  * *Sistemáticas*: Planas, paralelas, espaciadas regularmente, agrupadas en familias (*joint sets*) que responden a un campo de esfuerzos regional o al doblamiento de capas.
  * *No sistemáticas*: Curvas, de geometría irregular y terminaciones ciegas contra fracturas preexistentes.
* **Metodología de censo en campo**: Se analizan mediante líneas de muestreo lineales (*scanlines*) o censos por área representativa, evaluando orientación (azimut/buzamiento), espaciado, persistencia y densidad de fractura.

---

## 2. Fallas y Sistemas de Fallas

Una falla es una superficie de discontinuidad tabular a lo largo de la cual se evidencia un desplazamiento relativo apreciable de los bloques contiguos.

### 2.1. Anatomía y Arquitectura Interna de una Zona de Falla
* **Geometría básica**: Bloque techo (*hanging wall*), bloque piso (*footwall*), rumbo (*strike*), buzamiento (*dip*) y cabeceo/ángulo de inclinación de estrías (*rake/pitch*).
* **Arquitectura interna**:
  * **Núcleo de falla (*Fault Core*)**: Zona estrecha donde se concentra la mayor parte del desplazamiento. Contiene rocas ultracataclásticas, arcillas y harinas de falla (*fault gouge*), actuando frecuentemente como barrera impermeable al flujo perpendicular de fluidos.
  * **Zona de daño (*Damage Zone*)**: Franja fracturada circundante que aloja fallas subsidiarias, diaclasas, venas y micropliegues, actuando como red conductora para fluidos paralelos a la falla.

---

### 2.2. Clasificación Dinámica de Anderson (1905)
Basada en el postulado de que **la superficie terrestre es una interfase libre sin esfuerzos de corte**, lo que obliga a que uno de los tres esfuerzos principales sea obligatoriamente vertical ($\sigma_v \approx \rho g z$) y los otros dos horizontales ($\sigma_H, \sigma_h$):

| Tipo de Falla | Régimen Tectónico | Disposición de Esfuerzos | Ángulo típico de buzamiento |
| :--- | :--- | :--- | :--- |
| **Normal** | Extensional ($\Delta L > 0$) | **$\sigma_1$ Vertical**, $\sigma_2$ y $\sigma_3$ Horizontales | Alto ángulo ($\sim 60^\circ$) |
| **Inversa / Cabalgamiento** | Compresivo ($\Delta L < 0$) | **$\sigma_3$ Vertical**, $\sigma_1$ y $\sigma_2$ Horizontales | Bajo ángulo ($\sim 30^\circ$) |
| **Transcurrente / Desgarre** | De rumbo (*Strike-slip*) | **$\sigma_2$ Vertical**, $\sigma_1$ y $\sigma_3$ Horizontales | Subvertical ($\sim 90^\circ$) |

* En fallas de cizalla conjugadas, el ángulo agudo bisecta la dirección del esfuerzo máximo $\sigma_1$, el ángulo obtuso contiene a $\sigma_3$, y el eje de intersección entre ambos planos coincide con $\sigma_2$.

---

### 2.3. Geometrías Complejas, Sistemas Extensionales e Inversión Tectónica
* **Fallas Lístricas y Rifting**:
  * Fallas normales cuyo buzamiento disminuye progresivamente en profundidad hasta asintotizarse en una superficie de despegue basal (*detachment*) subhorizontal.
  * La rotación del bloque colgante sobre la concavidad genera un **anticlinal de compensación (*rollover anticline*)** y sistemas de fallas subsidiarias sintéticas y antitéticas.
  * **Estratos de crecimiento (*syn-rift*)**: Rellenan progresivamente la cubeta del semi-graben, mostrando cuñas de engrosamiento hacia el plano de la falla con geometrías de traslape (*onlap*, *overlap* y *offlap*) según la relación entre la tasa de sedimentación ($R_s$) y la tasa de subsidencia/levantamiento ($R_u$).
* **Pliegues Asociados a Fallas Compresivas**:
  * *Pliegues por flexión de falla (Fault-bend folds)*: La falla consta de geometría plano-rampa-plano; las capas del bloque techo se acomodan por deslizamiento flexural al superar los cambios de pendiente.
  * *Pliegues por propagación de falla (Fault-propagation folds)*: El pliegue asimétrico se desarrolla por delante y en la punta ciega (*tip line*) de una falla inversa que avanza hacia la superficie.
  * *Pliegues por despegue (Detachment folds)*: El acortamiento se acomoda sobre un nivel dúctil o evaporítico sin propagación de rampas hacia la cobertera.
* **Inversión Tectónica Frágil**:
  * Reactivación compresiva de antiguas cuencas extensionales. Las fallas normales previas rejuegan en sentido inverso cuando se supera la envolvente de reactivación friccional.
  * Provoca la expulsión de secuencias *syn-rift*, la inversión de depocentros y la formación de estructuras de tipo *buttressing* (plegamiento y acumulación por colisión contra el plano de falla rígido).
* **Validación mediante Secciones Balanceadas**:
  * Herramienta fundamental para verificar la admisibilidad y viabilidad geométrica de los cortes geológicos estructurales frágiles.
  * Se basan en la conservación de volumen en 3D o de área en deformación plana 2D (método de balance de longitud de capa / *bed-length* y balance de áreas / *area balancing*), permitiendo inferir con rigor la profundidad del despegue basal.

---

## 3. Rocas de Falla y Criterios Cinemáticos Frágiles

### 3.1. Clasificación de Rocas de Falla (Sibson, 1977; Wise et al., 1984)
La trituración mecánica pura (cataclasis) predomina en el régimen frágil superficial, diferenciándose por su grado de cohesión y presencia de matriz:

* **Incohesivas (Sin soldar mecánicamente)**:
  * **Brecha de falla (*Fault breccia*)**: Fragmentos angulosos visibles a simple vista (>2 mm); matriz de grano fino <30% del volumen total.
  * **Harina de falla o salbanda (*Fault gouge*)**: Masa terrosa arcillosa ultra-triturada; matriz fina microcristalina >70% de la roca.
* **Cohesivas (Soldadas mecánicamente por presión/cementación)**:
  * **Protocataclasita**: 10% a 50% de matriz triturada; fenoclastos preservados.
  * **Cataclasita**: 50% a 90% de matriz fragmentada.
  * **Ultracataclasita**: >90% de matriz vítrea o afilada sin foliación interna por flujo plástico.
* **Pseudotaquilitas**: Fusión friccional sísmica instantánea de las paredes de la falla durante terremotos de gran energía, consolidada como un vidrio oscuro o material criptocristalino en venas inyectadas.

---

### 3.2. Criterios e Indicadores Cinemáticos Frágiles (Sistemas Riedel y Criterios de Petit)
Para determinar el sentido relativo del movimiento entre bloques contiguos en el campo:

1. **Estrías mecánicas (*slickenlines*) y Fibras minerales de crecimiento (*slickenfibers*)**:
   * Las estrías indican la línea de deslizamiento (*rake*).
   * Los escalones de calcita o cuarzo crecen asimétricamente a espaldas del resalte mecánico en sombras de presión (*crack-seal*); la cara vertical de los escalones apunta en el sentido de movimiento del bloque ausente/opuesto.
2. **Fracturas Subsidiarias y Modelos de Riedel (Experimentos de Arcilla)**:
   * Sobre el plano principal de cizalla ($M$ o plano de falla) se desarrollan fracturas secundarias diagnósticas:
   * **Criterios R (Cizallas sintéticas de Riedel)**: Se disponen a un ángulo bajo ($\sim 10^\circ\text{–}15^\circ$) respecto a la falla principal, sintéticas con el movimiento general.
   * **Criterios R' (Cizallas antitéticas de Riedel)**: Se orientan a alto ángulo ($\sim 70^\circ\text{–}80^\circ$) respecto a la falla principal, con movimiento opuesto (antitético).
   * **Criterios P**: Fracturas de cizalla sintéticas simétricas a $R$, que buzan en sentido contrario formando escalones resistentes cuya cara abrupta mira contra el sentido del bloque suprayacente.
   * **Criterios T (Fracturas de Tensión / Grietas en *échelon*)**: Se originan a $\sim 45^\circ$ del plano de cizalla, perpendiculares a $\sigma_3$ infinitesimal local, con morfología sigmoidal si sufren deformación progresiva frágil-dúctil.
   * **Criterios de Petit (1987)**: Clasificación de escalones y micro-lúnulas en el plano pulido de falla (*criterios T, R, RM, P, PT, PO*) que sustituyen definitivamente el viejo criterio subjetivo de "suavidad al tacto" por un riguroso análisis morfológico-mecánico.