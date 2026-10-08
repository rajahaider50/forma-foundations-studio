package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun KanbanScreen(onCreate:()->Unit){Card{Column{Text("Kanban");Text("Domain-specific kanban workflow");Button(onClick=onCreate){Text("Create")}}}}
