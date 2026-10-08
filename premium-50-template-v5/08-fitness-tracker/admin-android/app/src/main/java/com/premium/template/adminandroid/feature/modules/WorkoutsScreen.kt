package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun WorkoutsScreen(onCreate:()->Unit){Card{Column{Text("Workouts");Text("Domain-specific workouts workflow");Button(onClick=onCreate){Text("Create")}}}}
