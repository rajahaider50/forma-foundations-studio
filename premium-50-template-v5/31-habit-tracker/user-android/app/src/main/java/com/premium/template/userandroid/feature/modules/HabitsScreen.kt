package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun HabitsScreen(onCreate:()->Unit){Card{Column{Text("Habits");Text("Domain-specific habits workflow");Button(onClick=onCreate){Text("Create")}}}}
