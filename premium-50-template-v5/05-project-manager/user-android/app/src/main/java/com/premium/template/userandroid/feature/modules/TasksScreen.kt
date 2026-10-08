package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun TasksScreen(onCreate:()->Unit){Card{Column{Text("Tasks");Text("Domain-specific tasks workflow");Button(onClick=onCreate){Text("Create")}}}}
